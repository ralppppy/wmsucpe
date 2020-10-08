import { Col, Row, Typography } from "antd";

import { FacebookOutlined } from "@ant-design/icons";
import { SocialIcon } from "react-social-icons";

const { Title, Text } = Typography;

function FooterSection() {
  return (
    <>
      <div className="footer mt-5 p-3 h-100">
        <Row className="footer-header-title" gutter={[32, 32]}>
          <Col md={{ span: 24 }} sm={{ span: 24 }}>
            <Title className="text-white text-center" level={3}>
              Visit our Social Links
            </Title>
            <div className="d-flex align-items-center justify-content-center ">
              <SocialIcon
                fgColor="#fff"
                url="https://www.facebook.com/wmsucomputerengineering/"
              />
              <SocialIcon
                className="ml-3 mr-3"
                fgColor="#fff"
                url="https://twitter.com/jaketrent"
              />
              <SocialIcon
                fgColor="#fff"
                url="https://www.youtube.com/channel/UCTY6fxtqkF_dtGanIhZHHVg"
              />
            </div>
          </Col>
          {/* <Col md={{ span: 8 }} sm={{ span: 24 }}>
            <Title className="text-center text-white" level={3}>
              Location
            </Title>
            <div className="container d-flex align-items-center justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8127141795812!2d122.05986171477282!3d6.91298319500502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041e77087e82b%3A0xa8c9820ffd5905cf!2sNormal%20Rd%2C%20Zamboanga%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1601984927249!5m2!1sen!2sph"
                height="300"
                frameBorder="0"
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </Col>
          <Col md={{ span: 8 }} sm={{ span: 24 }}>
            <Title className="text-center text-white" level={3}>
              Social
            </Title>
          </Col>
          <Col md={{ span: 8 }} sm={{ span: 24 }}>
          

            <ul>
              <li>
                <SocialIcon
                  fgColor="#fff"
                  url="https://www.facebook.com/wmsucomputerengineering/"
                />
              </li>
              <li>
                <SocialIcon
                  fgColor="#fff"
                  url="https://twitter.com/jaketrent"
                />
              </li>
              <li>
                <SocialIcon
                  fgColor="#fff"
                  url="https://twitter.com/jaketrent"
                />
              </li>
            </ul>
          </Col>
       */}
        </Row>
      </div>
      <style jsx>
        {`
          .footer {
            background-color: #2c3f46;
            color: #fff;
          }

          .ant-typography h2,
          h2.ant-typography {
            color: #fff !important;
          }
          ul {
            list-style-type: none;
          }

          ul,
          li {
            margin-bottom: 20px;
          }

          .fa-facebook {
            background: #3b5998;
            color: white;
          }
          .fa {
            padding: 20px;
            font-size: 30px;
            width: 50px;
            text-align: center;
            text-decoration: none;
            margin: 5px 2px;
          }
        `}
      </style>
    </>
  );
}

export default FooterSection;
