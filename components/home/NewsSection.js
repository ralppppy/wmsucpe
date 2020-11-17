import { useContext, useEffect, useState } from "react";
import { Row, Col, Typography, Card, Tooltip } from "antd";
import Axios from "axios";

import Link from "next/link";

import { AppContext } from "../../context/AppContext";
import dayjs from "dayjs";

const { Meta } = Card;

const { Title } = Typography;

function NewsSection() {
  const [news, setNews] = useState([]);

  const { proxy } = useContext(AppContext);

  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/news/get_landing_page_news", {
      params: { limit: 4 },
    })
      .then((newsResponse) => {
        let newsData = newsResponse.data;

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
          <Col md={{ span: 24 }} sm={{ span: 24 }}>
            <Row gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
              {news.map((news, index) => (
                <Col key={index} md={{ span: 6 }} sm={{ span: 24 }}>
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
                        <>
                          <small className="font-weight-bold">
                            Date Created{" "}
                          </small>
                          <br />
                          <small>
                            {dayjs(news[0]?.createdAt).format(
                              "MMMM DD, YYYY, hh:mm a"
                            )}
                          </small>
                        </>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
            <Title className="text-center" level={4}>
              <a alt="all-news" href="/news/all">
                Show All
              </a>
            </Title>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NewsSection;
