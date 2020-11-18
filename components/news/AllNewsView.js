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

const { Text, Title } = Typography;
const { DirectoryTree } = Tree;

function AllNewsView({ news }) {
  let { proxy } = useContext(AppContext);
  const [archives, setArchives] = useState([]);
  let newsPlaceholder = new Array(2).fill(1);

  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/news/archives")
      .then((archiveResponse) => {
        let { archive } = archiveResponse.data;
        setArchives(archive);
      })
      .catch((error) => console.log(error));
  }, []);

  const onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
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
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
              }}
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
                        {striptags(item.newsContent).replace(/\&nbsp;/g, " ")
                          .length > 100
                          ? striptags(item.newsContent)
                              .replace(/\&nbsp;/g, " ")
                              .substr(0, 100) + "..."
                          : striptags(item.newsContent)}
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
              multiple
              defaultExpandAll
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
