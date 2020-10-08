import { Row, Col, Typography, Card, Form, Button, Input } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

function ContactUsSection() {
  const [form] = Form.useForm();

  return (
    <div className="mb-3 p-3 mt-3">
      <div className="container text-center ">
        <Row gutter={[32]}>
          <Col md={{ span: 12 }} sm={{ span: 24 }}>
            <Title strong className="mt-3" level={2}>
              Contact us
            </Title>
            <img
              loading="lazy"
              style={{ width: "80%" }}
              src="/brand/contact.jpg"
            />
          </Col>
          <Col className="w-100" md={{ span: 12 }} sm={{ span: 24 }}>
            <Card className="shadow-sm mt-3">
              <Form
                size="large"
                layout={"vertical"}
                form={form}
                initialValues={{ layout: "vertical" }}
                //  onValuesChange={onFormLayoutChange}
              >
                <Form.Item label="Email">
                  <Input placeholder="Enter your Email" />
                </Form.Item>
                <Form.Item label="Name">
                  <Input placeholder="Enter your Name" />
                </Form.Item>
                <Form.Item label="Message">
                  <TextArea placeholder="Write your message" rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button className="w-100" type="primary">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactUsSection;
