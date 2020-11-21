import { Col, Row, Typography } from "antd";
import Axios from "axios";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { FooterSection, TopHeader } from "../../components/layout";
import { AllNewsView } from "../../components/news";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

const { Title } = Typography;

function all() {
  const router = useRouter();

  const [news, setNews] = useState([]);
  const [isFetchingNews, setIsFetchingNews] = useState(true);

  const { proxy } = useContext(AppContext);
  function getParameterByName(name) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }
  useEffect(() => {
    let month = getParameterByName("month");
    let year = getParameterByName("year");
    let page = getParameterByName("page");
    let category = getParameterByName("category");
    let search = getParameterByName("search");
    let params = { limit: 3 };

    if (month) {
      params["month"] = month;
    }

    if (year) {
      params["year"] = year;
    }
    if (page) {
      params["page"] = page;
    }
    if (category) {
      params["category"] = category;
    }
    if (search) {
      params["search"] = search;
    }
    // setIsFetchingNews(true);
    Axios.get(proxy + "/api/v1/admin/news/get_landing_page_news", {
      params: { ...params },
    })
      .then((newsResponse) => {
        let newsData = newsResponse.data;
        setIsFetchingNews(false);
        setNews(newsData);
        if (newsData.length === 0 && page !== "1") {
          router.push({
            pathname: "/news/all",
            query: { ...router.query, page: 1 },
          });
        }
      })
      .catch((error) => console.log(error));
  }, [router.query, setIsFetchingNews]);

  return (
    <>
      <Head>
        {/* Do not remove the space it will throw an error */}
        <title>All News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <Row>
        <Col className="w-100" md={{ span: 24 }}>
          <div className="d-flex flex-column bd-highlight mb-3 justify-space-between">
            <div id="Home">
              <TopHeader isNewsPage={true} />
            </div>
            <div id="Home">
              <div className="container mt-5">
                <Title className="text-center">All News</Title>
                <AllNewsView
                  setIsFetchingNews={setIsFetchingNews}
                  isFetchingNews={isFetchingNews}
                  setNews={setNews}
                  news={news}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div id="Footer">
        <FooterSection isNewsPage={true} />
      </div>
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        body {
          background-color: white;
        }
        html,
        body,
        div#__next {
          height: 100%;
          width: 100%;
          scroll-behavior: smooth;
          scroll-padding-top: 50px;
        }
      `}</style>
    </>
  );
}

export default all;
