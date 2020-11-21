import React, { useContext, useEffect, useState } from "react";
import { Button, Divider, Input, List, Space, Row, Col } from "antd";
import { AppContext } from "../../context/AppContext";

import { useRouter } from "next/router";

//COMPONENTS
import {
  Archives,
  BlankNewsLoader,
  NewsListItems,
  Categories,
  NewsSearch,
} from "./";

function AllNewsView({ news, setNews, isFetchingNews, setIsFetchingNews }) {
  let { proxy } = useContext(AppContext);
  const [archives, setArchives] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [totalNewsCount, setTotalNewsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  let newsPlaceholder = new Array(1).fill(1);

  function getParameterByName(name) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }

  useEffect(() => {
    let month = getParameterByName("month");
    let year = getParameterByName("year");
    let page = getParameterByName("page");

    if (page) {
      setCurrentPage(parseInt(page));
    } else {
      setCurrentPage(1);
    }

    if (year && month) {
      let expandedKeysCopy = [...expandedKeys];

      if (
        !expandedKeysCopy.includes(year) &&
        !expandedKeysCopy.includes(`${year}-${month}`)
      ) {
        setExpandedKeys([...expandedKeys, `${year}`, `${year}-${month}`]);
      } else if (!expandedKeysCopy.includes(`${year}-${month}`)) {
        setExpandedKeys([...expandedKeys, `${year}-${month}`]);
      } else if (!expandedKeysCopy.includes(`${year}`)) {
        setExpandedKeys([...expandedKeys, `${year}`]);
      }

      setSelectedKeys([`${year}-${month}`]);
    } else {
      setExpandedKeys([`all`]);
      setSelectedKeys([`all`]);
    }
  }, [router, setExpandedKeys, setSelectedKeys, archives]);

  const onSelect = (keys, event) => {
    let searchKey = keys[0].split("-");

    if (searchKey.length > 1) {
      setIsFetchingNews(true);

      setTotalNewsCount(event.node.newsCount);
      setNews([]);
      let year = searchKey[0];
      let month = searchKey[1];

      router.push({
        pathname: "/news/all",
        query: { ...router.query, month, year },
      });
    } else {
      if (keys[0] === "all") {
        setIsFetchingNews(true);

        setTotalNewsCount(event.node.newsCount);
        setExpandedKeys([]);
        setSelectedKeys(["all"]);

        delete router.query.month;
        delete router.query.year;
        return router.push({
          pathname: "/news/all",
          query: { ...router.query },
        });
      } else {
        let expandedKeysCopy = [...expandedKeys];
        if (!expandedKeysCopy.includes(keys[0])) {
          expandedKeysCopy = [...expandedKeysCopy, keys[0]];
          setExpandedKeys(expandedKeysCopy);
        }
      }
    }
  };

  const onExpand = () => {
    //console.log("Trigger Expand");
  };

  return (
    <>
      <Divider />
      <Row gutter={[32, 32]}>
        <Col md={{ span: 19 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <Space className="w-100" direction="vertical">
            <NewsSearch />

            <List
              className="w-100"
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  setIsFetchingNews(true);
                  router.push({
                    pathname: "/news/all",
                    query: { ...router.query, page },
                  });
                },
                pageSize: 3,
                position: "top",
                showSizeChanger: false,
                total: totalNewsCount,
                // className: "mr-4",
                showTotal: (total) => `Total of ${total} news`,
                current: currentPage,
              }}
              dataSource={isFetchingNews === false ? news : newsPlaceholder}
              renderItem={(item, index) => (
                <>
                  {isFetchingNews === false ? (
                    <>
                      <NewsListItems
                        setTotalNewsCount={setTotalNewsCount}
                        setArchives={setArchives}
                        index={index}
                        item={item}
                        proxy={proxy}
                      />
                    </>
                  ) : (
                    <>
                      <BlankNewsLoader index={index} />
                    </>
                  )}
                </>
              )}
            />
          </Space>
        </Col>
        <Col
          className="w-100"
          md={{ span: 5 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Space className="w-100" direction="vertical">
            <Categories setIsFetchingNews={setIsFetchingNews} proxy={proxy} />

            <Archives
              proxy={proxy}
              setArchives={setArchives}
              setTotalNewsCount={setTotalNewsCount}
              selectedKeys={selectedKeys}
              expandedKeys={expandedKeys}
              onSelect={onSelect}
              onExpand={onExpand}
              archives={archives}
            />
          </Space>
        </Col>
      </Row>

      <style global jsx>{`
        .ant-list-lg .ant-list-item {
          padding: 16px 0px !important;
        }
      `}</style>
    </>
  );
}

export default React.memo(AllNewsView);
