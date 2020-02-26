import { useContext } from "react"
import { Layout, Menu, Icon, Typography } from "antd"
import { MdDashboard } from "react-icons/md"

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
                  <Icon type="dashboard" style={{ fontSize: 25 }} />
                  <span strong>Dashboard</span>
               </Menu.Item>
               <Menu.Item key="2">
                  <Icon type="transaction" style={{ fontSize: 25 }} />
                  <span strong>Transaction</span>
               </Menu.Item>
               <Menu.Item key="3">
                  <Icon type="calendar" style={{ fontSize: 25 }} />
                  <span strong>Calendar</span>
               </Menu.Item>
            </Menu>
         </Sider>
      </>
   )
}

export default SideNav
