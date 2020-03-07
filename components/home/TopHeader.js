import { PageHeader, Typography, Button } from "antd"

const { Title } = Typography

function TopHeader() {
   return (
      <>
         <PageHeader
            className="site-page-header shadow-sm "
            title={
               <>
                  <img src="/brand/brand@2x.png" width={70} />
               </>
            }
            subTitle={
               <Title className="mt-3" level={4}>
                  WMSU Computer Engineering
               </Title>
            }
            extra={[
               <a key="5" className="mr-3 link-style">
                  Home
               </a>,
               <a key="4" className="mr-3 link-style">
                  News
               </a>,
               <a key="3" className="mr-3 link-style">
                  Location
               </a>,
               <a key="2" className="mr-3 link-style">
                  About
               </a>,
               <a key="1" className="mr-3 link-style">
                  Login
               </a>
            ]}
         />

         <style global jsx>{`
            site-page-header {
               border: 1px solid rgb(235, 237, 240);
               background-color: #f9f9f9;
               padding: 10px;
               padding-left: 25px;
            }
            .ant-page-header {
               -webkit-box-sizing: border-box;
               box-sizing: border-box;
               margin: 0;
               color: rgba(0, 0, 0, 0.65);
               font-size: 14px;
               font-variant: tabular-nums;
               line-height: 1.5715;
               list-style: none;
               -webkit-font-feature-settings: "tnum";
               font-feature-settings: "tnum";
               position: relative;
               padding: 7px 24px;
               background-color: #f9f9f9;
            }
            .ant-page-header-heading-extra,
            .ant-page-header-rtl .ant-page-header-heading-tags {
               float: right;
               margin-top: 2%;
            }
            .link-style {
               font-size: 15px;
            }
         `}</style>
      </>
   )
}

export default TopHeader
