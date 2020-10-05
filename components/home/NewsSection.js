import { Row, Col, Typography, Card, Avatar } from "antd";

const { Meta } = Card;

const { Title, Text } = Typography;

function NewsSection() {
  return (
    <div className="mb-3 p-3">
      <Title strong className="text-center mt-3" level={2}>
        News
      </Title>
      <div className="container">
        <Row gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col md={{ span: 9 }} sm={{ span: 24 }}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Text>Read More</Text>]}
            >
              <Meta
                title="This is a news title"
                description="This is a short description for the news title, yeah good job my friend"
              />
            </Card>
          </Col>
          <Col md={{ span: 15 }} sm={{ span: 24 }}>
            <Row gutter={[32, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
              {[0, 1, 2, 3, 4, 5].map((news, index) => (
                <Col key={index} md={{ span: 8 }} sm={{ span: 24 }}>
                  <Card
                    key={index}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[<Text>Read More {news}</Text>]}
                  >
                    <Meta
                      title="This is a news title"
                      description="This is a short description for the news title, yeah good job my friend"
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NewsSection;
