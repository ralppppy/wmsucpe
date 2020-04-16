import { PageHeader, Typography, Affix, Menu, Drawer } from "antd"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import {
   MenuFoldOutlined,
   MailOutlined,
   SettingOutlined,
   AppstoreOutlined,
} from "@ant-design/icons"
import {
   Link,
   Element,
   Events,
   animateScroll as scroll,
   scrollSpy,
   scroller,
} from "react-scroll"
import { isMobile } from "react-device-detect"
const { SubMenu } = Menu
const { Title, Text } = Typography

function TopHeader() {
   let [transparent, setTransparent] = useState(false)
   let [menu, setMenu] = useState([
      "Login",
      "Location",
      "News",
      "Learn Skills",
      "Home",
   ])
   let [menuRev, setMenuRev] = useState([
      "Home",
      "Learn Skills",
      "News",
      "Location",
      "Login",
   ])
   let [drawerVisible, setDrawerVisible] = useState(false)
   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" })
   const isTabletOrMobileDevice = useMediaQuery({
      query: "(max-device-width: 1224px)",
   })

   useEffect(() => {
      Events.scrollEvent.register("begin", function (to, element) {})

      Events.scrollEvent.register("end", function (to, element) {})
      scrollSpy.update()
      window.addEventListener("scroll", (e) => {
         let scrollTop = e.srcElement.scrollingElement.scrollTop

         if (scrollTop > 50) {
            setTransparent(true)
         } else {
            setTransparent(false)
         }
      })

      return () => {
         Events.scrollEvent.remove("begin")
         Events.scrollEvent.remove("end")
      }
   }, [])

   const handleDrawer = () => {
      setDrawerVisible((prev) => !prev)
   }

   return (
      <Affix>
         <Menu
            className={`site-page-header shadow-sm p-2 ${
               transparent && "transparent-background"
            }`}
            // onClick={this.handleClick}
            // selectedKeys={[this.state.current]}
            mode="horizontal"
         >
            {isMobile || isTabletOrMobile ? (
               <Menu.Item className="float-right" key="1">
                  <MenuFoldOutlined
                     onClick={handleDrawer}
                     style={{ fontSize: 20, marginRight: 6 }}
                     //  className="float-right"
                  />
               </Menu.Item>
            ) : (
               menu.map((m) => (
                  <Menu.Item className="float-right" key={m}>
                     <Link
                        activeClass="active"
                        to={m}
                        spy={true}
                        smooth={true}
                        // offset={50}
                        duration={500}
                     >
                        {m}
                     </Link>
                  </Menu.Item>
               ))
            )}
            <div className="float-left ml-2">
               <img src="/brand/brand@2x.png" width={50} />
               {!isTabletOrMobile && (
                  <Text
                     style={{ fontSize: 20, marginLeft: 6, marginTop: 10 }}
                     strong
                  >
                     WMSU Computer Engineering
                  </Text>
               )}
            </div>
         </Menu>

         <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={handleDrawer}
            visible={drawerVisible}
         >
            {menuRev.map((m) => (
               // <Menu.Item className="float-right" key={m}>
               <p key={m}>
                  <Link
                     onClick={handleDrawer}
                     activeClass="active"
                     to={m}
                     spy={true}
                     smooth={true}
                     offset={-50}
                     duration={500}
                  >
                     {m}
                  </Link>
               </p>
               // </Menu.Item>
            ))}
         </Drawer>

         <style global jsx>{`
            site-page-header {
               border: 1px solid rgb(235, 237, 240);

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
            .ant-menu-horizontal {
               line-height: 46px;
               white-space: nowrap;
               border: 0;
               border-bottom: 1px solid #f0f0f0;
               -webkit-box-shadow: none;
               box-shadow: none;
               background-color: #f9f9f9;
            }
            .transparent-background {
               background-color: rgba(249, 249, 249, 0.9);
            }
            .ant-page-header-heading-extra,
            .ant-page-header-rtl .ant-page-header-heading-tags {
               float: right;
               margin-top: 30px;
            }
            .link-style {
               font-size: 15px;
            }
         `}</style>
      </Affix>
   )
}

export default TopHeader
