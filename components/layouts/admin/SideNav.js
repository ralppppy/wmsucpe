import { useContext, useState, useEffect } from "react"
import { Layout, Menu, Typography } from "antd"
import {
   DashboardOutlined,
   TransactionOutlined,
   CalendarOutlined
} from "@ant-design/icons"
import EClogo from "./brand/ec.jpg"

//Context
import { LayoutContext } from "../../../context/admin/LayoutContext"
import Router, { withRouter } from "next/router"

const { Sider } = Layout
const { Text } = Typography

function SideNav({ router }) {
   let { collapsed } = useContext(LayoutContext)
   let [key, setKey] = useState("1")

   useEffect(() => {
      switch (router.pathname) {
         case "/admin":
            setKey("1")
            break
         case "/admin/transaction":
            setKey("2")
            break
         default:
            return
      }
   }, [])

   const handleMenuChange = e => {
      switch (e.key) {
         case "1":
            setKey("1")
            Router.push("/admin")
            break
         case "2":
            setKey("2")
            Router.push("/admin/transaction")
            break

         default:
            return
      }
   }

   return (
      <>
         <Sider
            style={{ background: "#fff" }}
            trigger={null}
            collapsible
            collapsed={collapsed}
         >
            <img
               style={{ padding: 5 }}
               width={70}
               src={EClogo}
               alt="exact-construct"
            />

            <Menu
               theme="light"
               mode="inline"
               defaultSelectedKeys={[key]}
               selectedKeys={[key]}
               onClick={handleMenuChange}
            >
               <Menu.Item key="1">
                  <DashboardOutlined
                     className={`dashboard-icon ${collapsed &&
                        "dashboard-icon-collapse"} `}
                  />

                  <span>Dashboard</span>
               </Menu.Item>
               <Menu.Item key="2">
                  <TransactionOutlined className="dashboard-icon" />

                  <span>Transaction</span>
               </Menu.Item>
               <Menu.Item key="3">
                  <CalendarOutlined className="dashboard-icon" />

                  <span>Calendar</span>
               </Menu.Item>
            </Menu>
         </Sider>

         <style global jsx>
            {`
               .ant-menu-inline-collapsed > .ant-menu-item .anticon {
                  font-size: 25px;
               }

               .ant-menu-item .anticon,
               .ant-menu-submenu-title .anticon {
                  min-width: 14px;
                  margin-right: 10px;
                  font-size: 18px;
                  -webkit-transition: font-size 0.15s
                        cubic-bezier(0.215, 0.61, 0.355, 1),
                     margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                  transition: font-size 0.15s
                        cubic-bezier(0.215, 0.61, 0.355, 1),
                     margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
               }
            `}
         </style>
      </>
   )
}

export default withRouter(SideNav)
