import { Row, Col, Typography, Card, Form, Button, Input, message } from "antd";
import Axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const { Title } = Typography;
const { TextArea } = Input;

function ContactUsSection() {
  const [form] = Form.useForm();
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const { proxy } = useContext(AppContext);

  const onFinishFailed = (errors) => {
    console.log(errors);
  };

  const onFinish = (values) => {
    setIsSendingMessage(true);
    message.loading({
      content: "Sending your message",
      key: "updatable",
      duration: 5,
    });
    Axios.post(proxy + "/api/v1/email/send_email_notification", values)
      .then((emailResponse) => {
        let { success, msg } = emailResponse.data;
        if (success) {
          message.success({ content: msg, key: "updatable" });
          setIsSendingMessage(false);
        } else {
          message.error({ content: msg, key: "updatable" });
        }
      })
      .catch((error) => console.log(error));
  };

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
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
              >
                <Form.Item
                  rules={[
                    { required: true, message: "Email field is required." },
                  ]}
                  name="email"
                  label="Email"
                >
                  <Input type="email" placeholder="Enter your Email" />
                </Form.Item>
                <Form.Item name="name" label="Name">
                  <Input placeholder="Enter your Name" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: "The message field is required",
                    },
                    {
                      min: 73,
                      message: "Please send a meaningfull message",
                    },
                  ]}
                  label="Message"
                >
                  <TextArea placeholder="Write your message" rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button
                    loading={isSendingMessage}
                    htmlType="submit"
                    className="w-100"
                    type="primary"
                  >
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
