import { useContext, useEffect, useState } from "react";
import { Row, Col, Typography, Card, Tooltip, Image, Skeleton } from "antd";
import Axios from "axios";

import Link from "next/link";

import { AppContext } from "../../context/AppContext";
import dayjs from "dayjs";

const { Meta } = Card;

const { Title } = Typography;

function NewsSection() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { proxy } = useContext(AppContext);

  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/news/get_landing_page_news", {
      params: { limit: 4 },
    })
      .then((newsResponse) => {
        let newsData = newsResponse.data;

        setNews(newsData);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" p-3">
      <Title strong className="text-center mt-3" level={2}>
        News
      </Title>

      <div className="container">
        {/* <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col className="w-100" md={{ span: 24 }} sm={{ span: 24 }}> */}
        {!isLoading ? (
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {news.map((news, index) => (
              <Col
                key={index}
                lg={{ span: 6 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                <Card
                  className="rounded shadow-sm w-100"
                  key={index}
                  cover={
                    <img
                      alt="example"
                      src={
                        proxy + "/public/image/news/" + news.coverImageNameMd
                      }
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
                          {dayjs(news?.createdAt).format(
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
        ) : (
          <Row gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {new Array(4).fill(1).map((news, index) => (
              <Col
                key={index}
                lg={{ span: 6 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                <Card
                  className="rounded shadow-sm"
                  key={index}
                  cover={
                    <Skeleton.Image className="w-100" style={{ height: 253 }} />
                  }
                  actions={[
                    <Skeleton.Input
                      className="w-75"
                      active={true}
                      size={"default"}
                    />,
                  ]}
                >
                  <Meta
                    title={
                      <Skeleton.Input
                        className="w-100"
                        active={true}
                        size={"small"}
                      />
                    }
                    description={
                      <>
                        <Skeleton.Input
                          className="w-50 mb-1"
                          active={true}
                          size={"small"}
                        />
                        <br />
                        <Skeleton.Input
                          className="w-75 "
                          active={true}
                          size={"small"}
                        />
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <Title className="text-center" level={4}>
          <a alt="all-news" href="/news/all">
            Show All
          </a>
        </Title>
        {/* </Col>
        </Row> */}
      </div>
    </div>
  );
}

export default NewsSection;
