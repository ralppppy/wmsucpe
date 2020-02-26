import { useContext, useEffect } from "react"
import { Layout, Icon } from "antd"
import { useMediaQuery } from "react-responsive"
const { Header } = Layout

//Context
import { LayoutContext } from "../../../context/admin/LayoutContext"

function AdminHeader() {
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

   return (
      <Header className="shadow-sm" style={{ background: "#fff", padding: 0 }}>
         <Icon
            className="trigger ml-2"
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggle}
            style={{ fontSize: 25 }}
         />
         <a className="float-right mr-5">RALP yosores</a>
      </Header>
   )
}

export default AdminHeader
