import Head from "next/head";
import { Row, Col } from "antd";

import {
  TopHeader,
  HomeHeroSection,
  LearnSkills,
  NewsSection,
  AboutUsSection,
  ContactUsSection,
  FooterSection,
} from "../components/home";

import { Element } from "react-scroll";
import { useRef } from "react";

const Home = () => {
  const newsRef = useRef();
  const learnRef = useRef();
  const mapRef = useRef();
  const contactUsRef = useRef();
  const aboutRef = useRef();
  const topHeaderRef = useRef();

  return (
    <>
      <Head>
        <title>WMSU - Computer Engineering</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Row>
        <Col className="w-100" md={{ span: 24 }}>
          <div className="d-flex flex-column bd-highlight mb-3 justify-space-between">
            <div ref={topHeaderRef} id="Home">
              <TopHeader
                newsRef={newsRef}
                learnRef={learnRef}
                aboutRef={aboutRef}
                topHeaderRef={topHeaderRef}
                contactUsRef={contactUsRef}
              />
            </div>

            <HomeHeroSection />

            <div ref={learnRef} id="Learn Skills">
              <LearnSkills />
            </div>

            <div ref={newsRef} id="News">
              <NewsSection />
            </div>

            <div ref={aboutRef} id="About">
              <AboutUsSection />
            </div>

            <div ref={contactUsRef} id="Contact Us">
              <ContactUsSection />
            </div>
          </div>
        </Col>
      </Row>
      <div id="Footer">
        <FooterSection />
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
};

export default Home;
