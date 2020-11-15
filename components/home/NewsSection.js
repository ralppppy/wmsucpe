import { useContext, useEffect, useState } from "react";
import { Row, Col, Typography, Card, Tooltip } from "antd";
import Axios from "axios";
import striptags from "striptags";

//import Link from "next/link";

import { AppContext } from "../../context/AppContext";

const { Meta } = Card;

const { Title, Text } = Typography;

function NewsSection() {
  const [news, setNews] = useState([]);

  const { proxy } = useContext(AppContext);

  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/news/get_landing_page_news")
      .then((newsResponse) => {
        let newsData = newsResponse.data;

        console.log(newsData);

        setNews(newsData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" p-3">
      <Title strong className="text-center mt-3" level={2}>
        News
      </Title>
      <div className="container">
        <Row gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col md={{ span: 9 }} sm={{ span: 24 }}>
            <Card
              className="rounded shadow-sm"
              cover={
                <img
                  alt="example"
                  src={proxy + "/public/image/" + news[0]?.coverImageNameLg}
                />
              }
              actions={[
                <a
                  style={{ color: "#1890ff" }}
                  href={"/news/" + news[0]?.newsUrlSlug}
                >
                  Read More
                </a>,
              ]}
            >
              <Meta
                title={
                  <Tooltip placement="topLeft" title={news[0]?.newsTitle}>
                    {news[0]?.newsTitle}
                  </Tooltip>
                }
                description={
                  <Text>
                    {striptags(news[0]?.newsContent).length > 105
                      ? striptags(news[0]?.newsContent).substr(0, 104) + "..."
                      : striptags(news[0]?.newsContent)}
                  </Text>
                }
              />
            </Card>
          </Col>
          <Col md={{ span: 15 }} sm={{ span: 24 }}>
            <Row gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
              {news.map((news, index) => (
                <Col key={index} md={{ span: 8 }} sm={{ span: 24 }}>
                  <Card
                    className="rounded shadow-sm"
                    key={index}
                    cover={
                      <img
                        alt="example"
                        src={proxy + "/public/image/" + news.coverImageNameMd}
                      />
                    }
                    actions={[
                      <a
                        style={{ color: "#1890ff" }}
                        href={"/news/" + news.newsUrlSlug}
                      >
                        Read More
                      </a>,
                    ]}
                  >
                    <Meta
                      title={
                        <Tooltip placement="topLeft" title={news.newsTitle}>
                          {news.newsTitle}
                        </Tooltip>
                      }
                      description={
                        <Text>
                          {striptags(news.newsContent).length > 21
                            ? striptags(news.newsContent).substr(0, 20) + "..."
                            : striptags(news.newsContent)}
                        </Text>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NewsSection;
