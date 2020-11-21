import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

function AboutUsSection() {
  return (
    <div className="mb-3 p-3" style={{ backgroundColor: "#fafafa" }}>
      <div className="container mt-3 mb-3">
        <Row gutter={[32]}>
          <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div className="text-center">
              <Title strong className="mt-3" level={2}>
                About Us
              </Title>
            </div>
            <Paragraph>
              Magna magna voluptate occaecat pariatur laborum est sunt
              excepteur. Adipisicing ullamco laborum et ullamco ullamco officia
              excepteur do. Laborum velit deserunt qui voluptate fugiat enim.
              Velit culpa cillum Lorem aute. Velit eiusmod enim eiusmod non
              pariatur minim cillum officia ullamco ipsum incididunt. Magna
            </Paragraph>
            <Paragraph>
              Magna magna voluptate occaecat pariatur laborum est sunt
              excepteur. Adipisicing ullamco laborum et ullamco ullamco officia
              excepteur do. Laborum velit deserunt qui voluptate fugiat enim.
              Velit culpa cillum Lorem aute. Velit eiusmod enim eiusmod non
              pariatur minim cillum officia ullamco ipsum incididunt. Magna
            </Paragraph>
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <iframe
              className="mt-3"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/j1ZRyw7OtZs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutUsSection;
