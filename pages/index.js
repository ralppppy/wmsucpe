import Head from "next/head";
import TopHeader from "../components/home/TopHeader";
import HomeHeroSection from "../components/home/HomeHeroSection";
import { Row, Col, Typography } from "antd";
import LearnSkills from "../components/home/LearnSkills";
import NewsSection from "../components/home/NewsSection";

import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Head>
        <title>WMSU - Computer Engineering</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        <Col className="w-100" md={{ span: 24 }}>
          <div className="d-flex flex-column bd-highlight mb-3">
            <Element name="Home" className="element">
              <TopHeader />
            </Element>

            <HomeHeroSection />

            <Element name="Learn Skills" className="element">
              <LearnSkills />
            </Element>

            <Element name="News" className="element">
              <NewsSection />
            </Element>
          </div>
        </Col>
      </Row>

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
        }
      `}</style>
    </>
  );
};

export default Home;
