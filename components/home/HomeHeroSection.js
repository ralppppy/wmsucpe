import { Typography, Button, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
//import { isMobile } from "react-device-detect";
const { Title, Text } = Typography;

function HomeHeroSection() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <div className="hero-section container mt-5">
        <Row className="mt-5">
          <Col md={{ span: 12 }} className="d-flex align-items-center">
            <div style={{ padding: 10 }}>
              <Title className={"text-title"}>WELCOME!</Title>
              <Title level={3}>
                Do you have what it takes to became a computer engineer?
              </Title>

              <br />
              <Button className={`register-button text-center`} type="primary">
                <Text className="button-text">Pre-Register Now!</Text>
              </Button>
            </div>
          </Col>
          <Col className="d-flex align-items-center" md={{ span: 12 }}>
            <img style={{ width: "100%" }} src="/brand/2968383@2x.png" />
          </Col>
        </Row>
      </div>

      <style global jsx>{`
        html,
        body,
        div#__next {
          height: 100%;
          width: 100%;
        }

        .hero-section {
          height: 65%;
          padding: 0;
          text-align: left;
        }

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          .hero-section {
            height: 40%;
            padding: 0;
            text-align: center;
          }
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          .hero-section {
            height: 40%;
            padding: 0;
          }
        }

        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          .hero-section {
            height: 40%;
            padding: 0;
          }
        }

        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          .hero-section {
            height: 40%;
            padding: 0;
          }
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          .hero-section {
            height: 80vh;
            padding: 0;
          }
        }

        .ant-typography h1,
        h1.ant-typography {
          margin-bottom: -0.5em;
          color: rgba(0, 0, 0, 0.85);
          font-weight: bold;
          font-size: 40px;
          line-height: 1.35;
        }

        .button-text {
          font-size: 20px;
          color: white;
        }

        .ant-btn-primary {
          color: #fff;
          background-color: #1890ff;
          border-color: #1890ff;
          width: auto;
          height: auto;
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
          -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
        }
      `}</style>
    </>
  );
}

export default HomeHeroSection;
