import Head from "next/head";
import { Row, Col } from "antd";

import {
  HomeHeroSection,
  LearnSkills,
  NewsSection,
  AboutUsSection,
  ContactUsSection,
  MapSection,
} from "../components/home";

import { FooterSection, TopHeader } from "../components/layout";

import { useRef } from "react";

import MessengerCustomerChat from "react-messenger-customer-chat";

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
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
                mapRef={mapRef}
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

            <div ref={mapRef} id="Location">
              <MapSection />
            </div>
          </div>
        </Col>
      </Row>
      <MessengerCustomerChat
        pageId="1895382890692545"
        appId="215971755540323"
      />
      {/* <MessengerCustomerChat
        pageId="ClothingAccessoriesOnlinePH"
        appId="180191003344026"
        // htmlRef="<REF_STRING>"
      /> */}
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
