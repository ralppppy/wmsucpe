import { TabBar, Drawer, List } from "antd-mobile"
import { Layout } from "antd"
import { useState, useEffect } from "react"
import "antd-mobile/dist/antd-mobile.css"
import {
   DashboardOutlined,
   TransactionOutlined,
   CalendarOutlined,
   MenuUnfoldOutlined,
   MenuFoldOutlined
} from "@ant-design/icons"
import Router, { withRouter } from "next/router"
import EClogo from "../brand/ec.jpg"

const { Header } = Layout

const Mobile = ({ children, router }) => {
   let [selectedTab, setSelectTab] = useState("dashboard")
   let [hidden, setHidden] = useState(false)
   let [fullScreen, setFullScreen] = useState(false)
   let [openNavBar, setOpenNavBar] = useState(false)

   useEffect(() => {
      switch (router.pathname) {
         case "/admin":
            setSelectTab("dashboard")
            break
         case "/admin/transaction":
            setSelectTab("transaction")
            break
         default:
            return
      }
   }, [])

   const sidebar = (
      <List>
         {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (i, index) => {
               if (index === 0) {
                  return (
                     <List.Item
                        key={index}
                        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                        multipleLine
                     >
                        Category
                     </List.Item>
                  )
               }
               return (
                  <List.Item
                     key={index}
                     thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                  >
                     Category{index}
                  </List.Item>
               )
            }
         )}
      </List>
   )

   const handleOpenNavBar = () => {
      setOpenNavBar(!openNavBar)
   }

   const renderContent = pageText => {
      return (
         <>
            <Header
               className="shadow-sm"
               style={{
                  background: "#fff",
                  padding: 0,
                  position: "sticky",
                  zIndex: 1000,
                  width: "100%",
                  top: 0,
                  left: 0
               }}
            >
               <img
                  style={{ padding: 5 }}
                  width={70}
                  src={EClogo}
                  alt="exact-construct"
               />
               {openNavBar ? (
                  <MenuUnfoldOutlined
                     style={{ fontSize: 30 }}
                     className="float-right mr-3 mt-3"
                     onClick={handleOpenNavBar}
                  />
               ) : (
                  <MenuFoldOutlined
                     style={{ fontSize: 30 }}
                     className="float-right mr-3 mt-3"
                     onClick={handleOpenNavBar}
                  />
               )}
            </Header>

            <div className="p-2">{children}</div>
         </>
      )
   }

   return (
      <>
         <Drawer
            className="my-drawer"
            style={{
               maxHeight: document.documentElement.clientHeight - 64,

               marginTop: 64
            }}
            enableDragHandle
            contentStyle={{
               textAlign: "center",
               marginTop: 10,
               paddingTop: 42
            }}
            sidebar={sidebar}
            open={openNavBar}
            onOpenChange={handleOpenNavBar}
         ></Drawer>
         <TabBar
            unselectedTintColor="#949494"
            tintColor="#bb1f2e"
            barTintColor="white"
            hidden={hidden}
         >
            <TabBar.Item
               title="Dashboard"
               key="dashboard"
               icon={<DashboardOutlined style={{ fontSize: 22 }} />}
               selectedIcon={
                  <DashboardOutlined
                     style={{ fontSize: 23, color: "#bb1f2e" }}
                  />
               }
               selected={selectedTab === "dashboard"}
               // badge={1}
               onPress={() => {
                  setSelectTab("dashboard")
                  Router.push("/admin")
               }}
               data-seed="logId"
            >
               {renderContent("Life")}
            </TabBar.Item>
            <TabBar.Item
               icon={<TransactionOutlined style={{ fontSize: 22 }} />}
               selectedIcon={
                  <TransactionOutlined
                     style={{ fontSize: 23, color: "#bb1f2e" }}
                  />
               }
               title="Transaction"
               key="transaction"
               //badge={"new"}
               selected={selectedTab === "transaction"}
               onPress={() => {
                  setSelectTab("transaction")
                  Router.push("/admin/transaction")
               }}
               data-seed="logId1"
            >
               {renderContent("Koubei")}
            </TabBar.Item>
            <TabBar.Item
               icon={<CalendarOutlined style={{ fontSize: 22 }} />}
               selectedIcon={
                  <div
                     style={{
                        width: "22px",
                        height: "22px",
                        background:
                           "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                     }}
                  />
               }
               title="Friend"
               key="Friend"
               dot
               selected={selectedTab === "greenTab"}
               onPress={() => {
                  setSelectTab("greenTab")
               }}
            >
               {renderContent("Friend")}
            </TabBar.Item>
         </TabBar>

         <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div,
            div#__next > div > div {
               height: 100%;
            }

            .my-drawer .am-drawer-sidebar .am-list {
               width: 200px;
               padding: 0;
            }

            .am-drawer.am-drawer-left .am-drawer-draghandle {
               left: 0;
               background-color: #f4f4f8;
            }
         `}</style>
      </>
   )
}

export default withRouter(Mobile)
