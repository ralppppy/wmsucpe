import React, { useContext } from "react";
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
} from "antd";
import striptags from "striptags";
import { AppContext } from "../../context/AppContext";
import dayjs from "dayjs";
import Link from "next/link";

const { Text, Title } = Typography;
const { DirectoryTree } = Tree;

function AllNewsView({ news }) {
  let { proxy } = useContext(AppContext);
  const treeData = [
    {
      title: "2020",
      key: "0-0",
      children: [
        {
          title: "January",
          key: "0-0-0",
        },
        {
          title: "Febuary",
          key: "0-0-1",
        },
      ],
    },
    {
      title: "2019",
      key: "0-1",
      children: [
        {
          title: "January",
          key: "0-1-0",
        },
        {
          title: "Febuary",
          key: "0-1-1",
        },
      ],
    },
  ];

  const onSelect = (keys, event) => {
    console.log("Trigger Select", keys, event);
  };

  const onExpand = () => {
    console.log("Trigger Expand");
  };

  return (
    <>
      <Divider />
      <Row>
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
              dataSource={news}
              renderItem={(item) => (
                <List.Item
                  key={item.newsTitle}
                  actions={[
                    <Text>
                      <Link href={`/news/${item.newsUrlSlug}`}>Read More</Link>
                    </Text>,
                  ]}
                  extra={
                    <img
                      className="rounded"
                      width={200}
                      height={200}
                      alt="logo"
                      src={proxy + "/public/image/" + item.coverImageNameMd}
                    />
                  }
                >
                  <List.Item.Meta
                    // avatar={<Avatar src={item.avatar} />}
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
                  {striptags(item.newsContent).replace(/\&nbsp;/g, "").length >
                  100
                    ? striptags(item.newsContent)
                        .replace(/\&nbsp;/g, "")
                        .substr(0, 100) + "..."
                    : striptags(item.newsContent)}
                  {console.log(news)}
                </List.Item>
              )}
            />
          </Space>
        </Col>
        <Col md={{ span: 5 }} sm={{ span: 24 }}>
          <div className="d-flex justify-content-center w-100">
            <Space direction="vertical">
              <Title level={3}>Archive</Title>

              <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={treeData}
              />
            </Space>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default AllNewsView;
