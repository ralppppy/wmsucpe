import { Typography } from "antd";

const { Title } = Typography;

function MapSection() {
  return (
    <div className="mb-3 p-3" style={{ backgroundColor: "#fafafa" }}>
      <Title strong className="text-center mt-3" level={2}>
        Location
      </Title>
      <div className="container d-flex align-items-center justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8127141795812!2d122.05986171477282!3d6.91298319500502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041e77087e82b%3A0xa8c9820ffd5905cf!2sNormal%20Rd%2C%20Zamboanga%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1601984927249!5m2!1sen!2sph"
          height="450"
          frameBorder="0"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default MapSection;
