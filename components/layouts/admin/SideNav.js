import { useContext } from "react"
import { Layout, Menu, Typography } from "antd"
import {
   DashboardOutlined,
   TransactionOutlined,
   CalendarOutlined
} from "@ant-design/icons"

//Context
import { LayoutContext } from "../../../context/admin/LayoutContext"

const { Sider } = Layout
const { Text } = Typography

function SideNav() {
   let { collapsed } = useContext(LayoutContext)

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
               src="brand/ec.jpg"
               alt="exact-construct"
            />

            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
               <Menu.Item key="1">
                  <DashboardOutlined style={{ fontSize: 25 }} />
                  {/* <Icon type="dashboard" style={{ fontSize: 25 }} /> */}
                  <span>Dashboard</span>
               </Menu.Item>
               <Menu.Item key="2">
                  <TransactionOutlined style={{ fontSize: 25 }} />
                  {/* <Icon type="transaction" style={{ fontSize: 25 }} /> */}
                  <span>Transaction</span>
               </Menu.Item>
               <Menu.Item key="3">
                  <CalendarOutlined style={{ fontSize: 25 }} />
                  {/* <Icon type="calendar" style={{ fontSize: 25 }} /> */}
                  <span>Calendar</span>
               </Menu.Item>
            </Menu>
         </Sider>
      </>
   )
}

export default SideNav
