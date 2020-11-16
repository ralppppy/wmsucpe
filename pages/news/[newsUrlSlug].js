import Head from "next/head";
import { Row, Col } from "antd";

import { TopHeader, FooterSection } from "../../components/layout";
import { NewsView } from "../../components/news";
import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

function News() {
  const { proxy } = useContext(AppContext);
  const [singleNewsData, setSingleNewsData] = useState({ newsContent: "" });
  const router = useRouter();

  useEffect(() => {
    let pageSLug = router.query.newsUrlSlug;
    Axios.get(proxy + "/api/v1/admin/news/single_View", {
      params: { newsUrlSlug: pageSLug },
    }).then((newsSingle) => {
      let data = newsSingle.data;
      setSingleNewsData(data);
    });
  }, [router.query.newsUrlSlug, proxy]);
  return (
    <>
      <Head>
        {/* Do not remove the space it will throw an error */}
        <title> {singleNewsData?.newsTitle}</title>
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
              <NewsView props={{ singleNewsData, proxy }} />
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

export default News;
