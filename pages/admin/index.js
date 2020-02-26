import AdminLayout from "../../components/layouts/admin/AdminLayout"
import { Row, Col, Card, Typography } from "antd"

const { Title, Text } = Typography

function index() {
   return (
      <AdminLayout>
         <Row gutter={[{ md: 50 }, 20]}>
            <Col md={{ span: 8 }}>
               <Card className="shadow-sm">
                  <Text strong>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley
                  </Text>
               </Card>
            </Col>
            <Col md={{ span: 8 }}>
               <Card className="shadow-sm">
                  {" "}
                  <Text strong>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley
                  </Text>
               </Card>
            </Col>
            <Col md={{ span: 8 }}>
               <Card className="shadow-sm">
                  {" "}
                  <Text strong>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley
                  </Text>
               </Card>
            </Col>
         </Row>

         <Row gutter={[{ md: 50 }, 20]}>
            <Col md={{ span: 8 }}>
               <Card className="shadow-sm">
                  <Text strong>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley
                  </Text>
               </Card>
            </Col>
            <Col md={{ span: 8 }}>
               <Card className="shadow-sm">
                  {" "}
                  <Text strong>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley
                  </Text>
               </Card>
            </Col>
            <Col md={{ span: 8 }}>
               <Card className="shadow-sm">
                  {" "}
                  <Text strong>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley
                  </Text>
               </Card>
            </Col>
         </Row>
      </AdminLayout>
   )
}

export default index
