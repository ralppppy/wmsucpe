import Link from "next/link";
import { Row, Col, Typography, Card } from "antd";
//TEST

import Networking from "../../public/brand/networking.png";
import Programming from "../../public/brand/algorithm.png";
import Hardware from "../../public/brand/computer.png";
import IOT from "../../public/brand/iot.png";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { AppContext } from "../../context/AppContext";
const { Title, Text } = Typography;

function LearnSkills() {
  let { proxy } = useContext(AppContext);

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/skill/get_landing_page_learn_skills")
      .then((skillsResponse) => {
        let data = skillsResponse.data;
        setSkills(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [proxy]);

  return (
    <div className="mb-3 p-3" style={{ backgroundColor: "#fafafa" }}>
      <Title strong className="text-center mt-3" level={2}>
        Learn this skills
      </Title>
      <div className="container">
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          {skills.map((skill) => (
            <Col md={{ span: 6 }} sm={{ span: 24 }}>
              <Card style={{ minHeight: 226 }} className="rounded shadow-sm">
                <Row gutter={{ lg: 32 }}>
                  <Col
                    className="text-center"
                    md={{ span: 24 }}
                    sm={{ span: 24 }}
                  >
                    <img
                      src={
                        proxy + "/public/image/skill/" + skill.coverImageIcon
                      }
                      width={70}
                    />
                  </Col>
                  <Col md={{ span: 24 }} sm={{ span: 24 }}>
                    <div className="text-center">
                      <Text strong>{skill.skillTitle}</Text>
                    </div>

                    <Text>{skill.skillDescription}</Text>
                  </Col>
                </Row>

                <a
                  href={"/skills/" + skill.skillUrlSlug}
                  style={{
                    color: "#1890ff",
                    position: "absolute",
                    bottom: 20,
                    left: 24,
                  }}
                >
                  Learn More...
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default LearnSkills;
