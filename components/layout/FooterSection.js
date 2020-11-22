import { Typography } from "antd";

import { SocialIcon } from "react-social-icons";

const { Title } = Typography;

function FooterSection() {
  return (
    <>
      <div className="footer mt-5 p-3 h-100">
        <Title className="text-white text-center" level={3}>
          Visit our Social Links
        </Title>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <SocialIcon
            fgColor="#fff"
            url="https://www.facebook.com/wmsucomputerengineering/"
          />
          <SocialIcon
            className="ml-3 mr-3"
            fgColor="#fff"
            url="https://twitter.com/jaketrent"
          />
          <SocialIcon
            fgColor="#fff"
            url="https://www.youtube.com/channel/UCTY6fxtqkF_dtGanIhZHHVg"
          />
        </div>
      </div>
      <style jsx>
        {`
          .footer {
            background-color: #2c3f46;
            color: #fff;
          }

          .ant-typography h2,
          h2.ant-typography {
            color: #fff !important;
          }
          ul {
            list-style-type: none;
          }

          ul,
          li {
            margin-bottom: 20px;
          }

          .fa-facebook {
            background: #3b5998;
            color: white;
          }
          .fa {
            padding: 20px;
            font-size: 30px;
            width: 50px;
            text-align: center;
            text-decoration: none;
            margin: 5px 2px;
          }
        `}
      </style>
    </>
  );
}

export default FooterSection;
