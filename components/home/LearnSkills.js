import Link from "next/link";
import { Row, Col, Typography, Card } from "antd";
//TEST

import Networking from "../../public/brand/networking.png";
import Programming from "../../public/brand/algorithm.png";
import Hardware from "../../public/brand/computer.png";
import IOT from "../../public/brand/iot.png";
const { Title, Text } = Typography;

function LearnSkills() {
  return (
    <div className="mb-3 p-3" style={{ backgroundColor: "#fafafa" }}>
      <Title strong className="text-center mt-3" level={2}>
        Learn this skills
      </Title>
      <div className="container">
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col md={{ span: 6 }} sm={{ span: 24 }}>
            <Card className="rounded">
              <Row gutter={{ lg: 32 }}>
                <Col
                  className="text-center"
                  md={{ span: 24 }}
                  sm={{ span: 24 }}
                >
                  <img src={Networking} width={70} />
                </Col>
                <Col md={{ span: 24 }} sm={{ span: 24 }}>
                  <div className="text-center">
                    <Text strong>Networking</Text>
                  </div>

                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Text>
                  <br />
                  <Link href="/">
                    <a>Learn More...</a>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={{ span: 6 }} sm={{ span: 24 }}>
            <Card className="rounded">
              <Row gutter={{ lg: 32 }}>
                <Col
                  className="text-center"
                  md={{ span: 24 }}
                  sm={{ span: 24 }}
                >
                  <img src={Programming} width={70} />
                </Col>
                <Col md={{ span: 24 }} sm={{ span: 24 }}>
                  <div className="text-center">
                    <Text strong>Programming</Text>
                  </div>

                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Text>
                  <br />
                  <Link href="/">
                    <a>Learn More...</a>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={{ span: 6 }} sm={{ span: 24 }}>
            <Card className="rounded">
              <Row gutter={{ lg: 32 }}>
                <Col
                  className="text-center"
                  md={{ span: 24 }}
                  sm={{ span: 24 }}
                >
                  <img src={Hardware} width={70} />
                </Col>
                <Col md={{ span: 24 }} sm={{ span: 24 }}>
                  <div className="text-center">
                    <Text strong>Computer Hardware</Text>
                  </div>

                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Text>
                  <br />
                  <Link href="/">
                    <a>Learn More...</a>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={{ span: 6 }} sm={{ span: 24 }}>
            <Card className="rounded">
              <Row gutter={{ lg: 32 }}>
                <Col
                  className="text-center"
                  md={{ span: 24 }}
                  sm={{ span: 24 }}
                >
                  <img src={IOT} width={70} />
                </Col>
                <Col md={{ span: 24 }} sm={{ span: 24 }}>
                  <div className="text-center">
                    <Text strong>Internet of things</Text>
                  </div>
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Text>
                  <br />
                  <Link href="/">
                    <a>Learn More...</a>
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LearnSkills;
