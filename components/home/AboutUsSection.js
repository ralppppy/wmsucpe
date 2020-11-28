import { Row, Col, Typography, Skeleton } from "antd";
import Axios from "axios";
import { useContext, useEffect, useState } from "react";

import { AppContext } from "../../context/AppContext";

const { Title, Paragraph } = Typography;

function AboutUsSection() {
  const { proxy } = useContext(AppContext);
  const [aboutusData, setAboutUsData] = useState(null);
  useEffect(() => {
    Axios.get(proxy + "/api/v1/admin/about_us/", {
      params: { excludeThis: ["aboutUsContent"] },
    })
      .then((aboutUsResponse) => {
        let data = aboutUsResponse.data[0];
        setAboutUsData(data);
      })
      .catch((error) => console.log(error));
  }, [proxy]);

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
            {aboutusData ? (
              <>
                <Paragraph>{aboutusData?.aboutUsIntroduction}</Paragraph>
                <a href="/about-us">Read More</a>
              </>
            ) : (
              <>
                <Skeleton paragraph={{ rows: 5 }} />
              </>
            )}
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
