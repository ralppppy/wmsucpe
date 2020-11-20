import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Divider,
  Input,
  List,
  Space,
  Typography,
  Row,
  Col,
  Tree,
  Skeleton,
} from "antd";
import striptags from "striptags";
import { AppContext } from "../../context/AppContext";
import dayjs from "dayjs";
import Link from "next/link";
import Axios from "axios";
import { useRouter } from "next/router";

const { Text, Title } = Typography;
const { DirectoryTree } = Tree;

function AllNewsView({ news, setNews }) {
  let { proxy } = useContext(AppContext);
  const [archives, setArchives] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const router = useRouter();

  let newsPlaceholder = new Array(1).fill(1);

  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/news/archives")
      .then((archiveResponse) => {
        let { archive } = archiveResponse.data;
        archive.unshift({
          key: "all",
          title: "All",
        });

        setArchives(archive);
      })
      .catch((error) => console.log(error));
  }, []);

  function getParameterByName(name) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }

  useEffect(() => {
    let month = getParameterByName("month");
    let year = getParameterByName("year");

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
      setNews([]);
      let year = searchKey[0];
      let month = searchKey[1];

      router.push({
        pathname: "/news/all",
        query: { month, year },
      });
    } else {
      if (keys[0] === "all") {
        setExpandedKeys([]);
        setSelectedKeys(["all"]);
        return router.push({
          pathname: "/news/all",
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
    console.log("Trigger Expand");
  };

  return (
    <>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col md={{ span: 19 }} sm={{ span: 24 }}>
          <Space direction="vertical">
            <Space className=" float-right mr-4">
              <Input
                style={{ width: "50vw" }}
                className="rounded"
                placeholder="Search  News"
              />
              <Button className="rounded" type="primary">
                Search
              </Button>
            </Space>
            <List
              itemLayout="vertical"
              size="large"
              pagination={
                news.length > 3
                  ? {
                      onChange: (page) => {
                        console.log(page);
                      },
                      pageSize: 3,
                    }
                  : false
              }
              dataSource={news.length > 0 ? news : newsPlaceholder}
              renderItem={(item, index) => (
                <>
                  {news.length > 0 ? (
                    <>
                      <List.Item
                        key={index}
                        actions={[
                          <Text>
                            <Link href={`/news/${item.newsUrlSlug}`}>
                              Read More
                            </Link>
                          </Text>,
                        ]}
                        extra={
                          <img
                            className="rounded"
                            width={200}
                            height={200}
                            alt="logo"
                            src={
                              proxy + "/public/image/" + item.coverImageNameMd
                            }
                          />
                        }
                      >
                        <List.Item.Meta
                          title={
                            <Link href={"/news/" + item.newsUrlSlug}>
                              {item.newsTitle}
                            </Link>
                          }
                          description={
                            <Space>
                              <Text strong={true} type="secondary">
                                Date Created:{" "}
                              </Text>
                              <Text type="secondary">
                                {dayjs(item.createdAt).format(
                                  "MMMM DD, YYYY, hh:mm a"
                                )}{" "}
                              </Text>
                            </Space>
                          }
                        />
                        {striptags(item.newsContent).replace(/\&nbsp;/g, " ")}
                        ...
                      </List.Item>
                    </>
                  ) : (
                    <>
                      <List.Item
                        key={index}
                        actions={[
                          <Skeleton.Input
                            style={{ width: "10vw" }}
                            active={true}
                            size="small"
                          />,
                        ]}
                        extra={
                          <Skeleton.Image
                            className="rounded"
                            style={{ width: 200, height: 200 }}
                            active={true}
                            size="small"
                          />
                        }
                      >
                        <List.Item.Meta
                          title={
                            <Skeleton.Input
                              className="w-75"
                              active={true}
                              size="default"
                            />
                          }
                          description={
                            <>
                              <Skeleton.Input
                                className="mr-1"
                                style={{ width: "5vw" }}
                                active={true}
                                size="small"
                              />
                              <Skeleton.Input
                                style={{ width: "13vw" }}
                                active={true}
                                size="small"
                              />
                            </>
                          }
                        />
                        <Skeleton
                          className="w-100"
                          paragraph={{ rows: 2 }}
                          active={true}
                          size="small"
                        />
                      </List.Item>
                    </>
                  )}
                </>
              )}
            />
          </Space>
        </Col>
        <Col md={{ span: 5 }} sm={{ span: 24 }}>
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
        </Col>
      </Row>
    </>
  );
}

export default AllNewsView;
