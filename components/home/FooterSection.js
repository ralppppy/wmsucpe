import { Avatar, Col, List, Row, Typography } from "antd";
import { FacebookOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function FooterSection() {
  return (
    <>
      <div className="footer mt-5 p-4 h-100">
        <Row className="footer-header-title" gutter={[32, 32]}>
          <Col md={{ span: 8 }} sm={{ span: 24 }}>
            <Title className="text-center text-white" level={3}>
              Location
            </Title>
            <div className="container d-flex align-items-center justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8127141795812!2d122.05986171477282!3d6.91298319500502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041e77087e82b%3A0xa8c9820ffd5905cf!2sNormal%20Rd%2C%20Zamboanga%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1601984927249!5m2!1sen!2sph"
                height="300"
                frameborder="0"
                style={{ border: 0, width: "100%" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </Col>
          <Col md={{ span: 8 }} sm={{ span: 24 }}>
            <Title className="text-center text-white" level={3}>
              Social
            </Title>
          </Col>
          <Col md={{ span: 8 }} sm={{ span: 24 }}>
            <Title className="text-white" level={3}>
              Visit our Social Links
            </Title>

            <ul>
              <li>
                <a href="https://www.facebook.com/wmsucomputerengineering/">
                  <FacebookOutlined
                    className="m-3 text-white"
                    style={{ fontSize: 30 }}
                  />
                  <Text className="text-white">WMSU Computer Engineering</Text>
                </a>
              </li>
              <li>
                <a>
                  <FacebookOutlined
                    className="m-3 text-white"
                    style={{ fontSize: 30 }}
                  />
                  <Text className="text-white">WMSU Computer Engineering</Text>
                </a>
              </li>
              <li>
                <FacebookOutlined
                  className="m-3 text-white"
                  style={{ fontSize: 30 }}
                />
                <Text className="text-white">WMSU Computer Engineering</Text>
              </li>
            </ul>
          </Col>
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
        `}
      </style>
    </>
  );
}

export default FooterSection;
