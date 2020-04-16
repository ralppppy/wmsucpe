import { Card, Row, Col, Typography } from "antd"
const { Title, Text } = Typography

function HomeCard() {
   return (
      <div className="home-card-section container">
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" md={{ span: 6 }}>
               <Card className="shadow-sm">
                  <Title level={4}>WMSU VISION</Title>
                  <Text>
                     The University of Choice for higher learning with strong
                     research orientation that produces professionals who are
                     socially responsive to and responsible for human
                     development; ecological sustainability; and, peace and
                     security within and beyond the region
                  </Text>
               </Card>
            </Col>
            <Col className="gutter-row" md={{ span: 6 }}>
               <Card className="shadow-sm">
                  <Title level={4}>WMSU MISSION</Title>
                  <Text>
                     The Western Mindanao State University, set in a culturally
                     diverse environment, shall pursue a vibrant socio-economic
                     agenda that include: • A relevant instruction paradigm in
                     the education and training of competent and responsive
                     human resource for societal and industry needs; • A home
                     for intellectual formation that generates knowledge for
                     people empowerment, social transformation and sustainable
                     development; and, • A hub where science, technology and
                     innovation flourish, enriched by the wisdom of the Arts and
                     Letters, and Philosophy.
                  </Text>
               </Card>
            </Col>
            <Col className="gutter-row" md={{ span: 6 }}>
               <Card className="shadow-sm">
                  <Title level={4}>ICPeP.SE VISION</Title>
                  <Text>
                     The Organization sees itself as the catalyst to the
                     academic and social needs of computer engineering students
                     of the Institute.
                  </Text>
               </Card>
            </Col>
            <Col className="gutter-row" md={{ span: 6 }}>
               <Card className="shadow-sm">
                  <Title level={4}>ICPeP.SE MISSION</Title>
                  <Text>
                     The Organization shall provide the academic needs of
                     computer engineering students in the Institute through the
                     use of collaborative learning. The Organization shall
                     provide relevant content and projects to the members
                     without resorting to the use of illegitimate means or
                     promoting unethical practices in attaining a better
                     academic standing.
                  </Text>
                  <hr />
                  <Text className="text-center" strong>
                     Core Values
                  </Text>
                  <Row>
                     <Col md={{ span: 12 }}>
                        <ul>
                           <li>Integrity</li>
                           <li>Commitment</li>
                           <li>Principle</li>
                        </ul>
                     </Col>
                     <Col md={{ span: 12 }}>
                        <ul>
                           <li>Enthusiasm</li>
                           <li>Perseverance</li>
                           <li>Service-oriented</li>
                           <li>Ethical</li>
                        </ul>
                     </Col>
                  </Row>
               </Card>
            </Col>
         </Row>

         <style global jsx>{`
            .home-card-section {
               height: 100%;
            }
            ul {
               list-style: none;
            }
         `}</style>
      </div>
   )
}

export default HomeCard
