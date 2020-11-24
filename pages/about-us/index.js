import { Col, Row, Typography } from "antd";
import Axios from "axios";
import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { FooterSection, TopHeader } from "../../components/layout";
import { AppContext } from "../../context/AppContext";
import parse from "html-react-parser";

const { Title } = Typography;

function index() {
  const { proxy } = useContext(AppContext);
  const [aboutusData, setAboutUsData] = useState(null);

  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/about_us/", {
      params: { excludeThis: ["aboutUsIntroduction"] },
    })
      .then((aboutUsResponse) => {
        let data = aboutUsResponse.data[0];
        setAboutUsData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [proxy]);
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
              <TopHeader isNotHOme={true} />
            </div>
            <div id="Home">
              <div className="container mt-5">
                <Title className="text-center">
                  Bachelor of Science in Computer Engineering
                </Title>
                {aboutusData && parse(aboutusData.aboutUsContent)}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div id="Footer">
        <FooterSection isNotHOme={true} />
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

export default index;
