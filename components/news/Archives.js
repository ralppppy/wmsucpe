import { Space, Tree, Typography } from "antd";
import React, { useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

const { Title } = Typography;
const { DirectoryTree } = Tree;
function Archives(props) {
  let {
    selectedKeys,
    expandedKeys,
    archives,
    onSelect,
    onExpand,
    setTotalNewsCount,
    setArchives,
    proxy,
  } = props;

  const router = useRouter();

  function getParameterByName(name) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }
  useEffect(() => {
    let month = getParameterByName("month");
    let year = getParameterByName("year");
    let category = getParameterByName("category");
    let params = { category: "" };

    if (category) {
      params["category"] = category;
    }

    Axios.get(proxy + "/api/v1/admin/news/archives", { params: { ...params } })
      .then((archiveResponse) => {
        let { archive, totalNewsCount } = archiveResponse.data;
        console.log(archive);
        archive.unshift({
          key: "all",
          title: "All",
          newsCount: totalNewsCount,
        });

        let findYear = archive.find((c) => c.key === year);

        if (findYear) {
          let findMonth = findYear.children.find(
            (c) => c.key === `${year}-${month}`
          );

          console.log(findMonth);

          setTotalNewsCount(findMonth?.newsCount);
        } else {
          setTotalNewsCount(totalNewsCount);
        }

        setArchives(archive);
      })
      .catch((error) => console.log(error));
  }, [router.query]);

  return (
    <Space direction="vertical">
      <Title level={3}>Archive</Title>

      <DirectoryTree
        selectedKeys={selectedKeys}
        expandedKeys={expandedKeys}
        defaultSelectedKeys={selectedKeys}
        defaultExpandedKeys={expandedKeys}
        multiple
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={archives}
      />
    </Space>
  );
}

export default Archives;
