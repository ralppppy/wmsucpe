import { useContext, useEffect } from "react"
import { Layout, Dropdown, Menu } from "antd"
import {
   DownOutlined,
   MenuFoldOutlined,
   MenuUnfoldOutlined
} from "@ant-design/icons"
import Cookie from "js-cookie"
import { useMediaQuery } from "react-responsive"
import Router from "next/router"

//Context
import { LayoutContext } from "../../../context/admin/LayoutContext"

const { Header } = Layout

function AdminHeader({ userData }) {
   let { collapsed, setCollapsed } = useContext(LayoutContext)

   const isDesktopOrLaptop = useMediaQuery({
      query: "(min-device-width: 1224px)"
   })
   const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" })
   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
   const isTabletOrMobileDevice = useMediaQuery({
      query: "(max-device-width: 1224px)"
   })
   const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
   const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" })

   useEffect(() => {
      if (isTabletOrMobileDevice) {
         setCollapsed(true)
      } else if (isDesktopOrLaptop) {
         setCollapsed(false)
      }
   }, [
      isDesktopOrLaptop,
      isBigScreen,
      isTabletOrMobile,
      isTabletOrMobileDevice,
      isPortrait,
      isRetina
   ])

   const toggle = () => {
      setCollapsed(!collapsed)
   }

   const handleLogout = e => {
      e.preventDefault()

      Cookie.remove("techVoiceToken")
      localStorage.removeItem("techVoiceToken")
      Router.push("/admin/login")
   }

   const menu = (
      <Menu>
         <Menu.Item>
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="http://www.alipay.com/"
               onClick={e => handleLogout(e)}
            >
               Logout
            </a>
         </Menu.Item>
      </Menu>
   )

   return (
      <Header className="shadow-sm" style={{ background: "#fff", padding: 0 }}>
         {!collapsed ? (
            <MenuFoldOutlined
               className="trigger ml-2"
               onClick={toggle}
               style={{ fontSize: 25 }}
            />
         ) : (
            <MenuUnfoldOutlined
               className="trigger ml-2"
               onClick={toggle}
               style={{ fontSize: 25 }}
            />
         )}
         <Dropdown overlay={menu} trigger={["click"]}>
            <a
               className="ant-dropdown-link float-right mr-5"
               onClick={e => e.preventDefault()}
            >
               {userData.firstName} {userData.lastName} <DownOutlined />
            </a>
         </Dropdown>
         ,
      </Header>
   )
}

export default AdminHeader
