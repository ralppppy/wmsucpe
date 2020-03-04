import Head from "next/head"
import { Layout } from "antd"
import SideNav from "./SideNav"
import Content from "./Content"
import AdminHeader from "./AdminHeader"
import { LayoutContextProvider } from "../../../context/admin/LayoutContext"
import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.min.css"

function AdminLayout({ children, userData }) {
   return (
      <>
         <Head>
            <title>Admin | Home</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <LayoutContextProvider>
            <Layout style={{ height: "100%" }}>
               <SideNav />
               <Layout>
                  <AdminHeader userData={userData} />

                  <Content children={children} />
               </Layout>
            </Layout>
         </LayoutContextProvider>
         <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div,
            div#__next > div > div {
               height: 100%;
            }

            .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
               background-color: #fff !important;
            }
            .ant-menu-item-selected,
            .ant-menu-item-selected > a,
            .ant-menu-item-selected > a:hover {
               color: #bb1f2e !important;
            }

            ant-menu-item-active,
            .ant-menu-item:hover {
               color: #ff6978 !important;
            }

            .ant-menu-inline .ant-menu-item:after,
            .ant-menu-vertical-left .ant-menu-item:after,
            .ant-menu-vertical-right .ant-menu-item:after,
            .ant-menu-vertical .ant-menu-item:after {
               border-right: 3px solid #bb1f2e !important;
            }
         `}</style>
      </>
   )
}

export default AdminLayout
