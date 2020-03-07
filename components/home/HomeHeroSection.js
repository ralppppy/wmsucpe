import { Typography, Button, Row, Col } from "antd"

const { Title, Text } = Typography

function HomeHeroSection() {
   return (
      <>
         <div className="hero-section container">
            <Row className="h-100 ">
               <Col md={{ span: 12 }} className="d-flex align-items-center">
                  <Row>
                     <Title className="text-center text-title">
                        WELCOME TO OUR PAGE!
                     </Title>

                     <Title level={2}>
                        Do you have what it takes to became a computer engineer?
                     </Title>
                     <br />
                     <Button className="register-button" type="primary">
                        <Text className="button-text">Pre-Register Now!</Text>
                     </Button>
                  </Row>
               </Col>
               <Col className="d-flex align-items-center" md={{ span: 12 }}>
                  <img width={600} src="/brand/2968383@2x.png" />
               </Col>
            </Row>
         </div>

         <style global jsx>{`
            html,
            body,
            div#__next {
               height: 100%;
            }
            .hero-section {
               height: 80%;
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
   )
}

export default HomeHeroSection
