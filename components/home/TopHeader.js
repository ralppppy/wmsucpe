import { Typography, Affix, Menu, Drawer } from "antd";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Link, Events, scrollSpy } from "react-scroll";

const { Text } = Typography;

function TopHeader() {
  let [transparent, setTransparent] = useState(false);
  let [activeClass, setActiveClass] = useState("Home");

  let MENU = ["Login", "Location", "News", "Learn Skills", "Home"];
  let MOBILE_MENU = ["Home", "Learn Skills", "News", "Location", "Login"];

  let [drawerVisible, setDrawerVisible] = useState(false);
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log(to, element);
      setActiveClass(to);
    });

    Events.scrollEvent.register("end", function (to, element) {});
    scrollSpy.update();
    window.addEventListener("scroll", (e) => {
      let scrollTop = e.target.scrollingElement.scrollTop;

      if (scrollTop > 50) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleDrawer = () => {
    setDrawerVisible((prev) => !prev);
  };

  return (
    <Affix>
      <Menu
        className={`site-page-header shadow-sm p-2 ${
          transparent && "transparent-background"
        }`}
        mode="horizontal"
      >
        {isTabletOrMobileDevice ? (
          <Menu.Item className="float-right" key={-1}>
            <MenuFoldOutlined
              onClick={handleDrawer}
              style={{ fontSize: 20, marginRight: 6 }}
            />
          </Menu.Item>
        ) : (
          MENU.map((menu, index) => (
            <Menu.Item className="float-right is-active" key={index}>
              <Link
                style={{
                  color: menu === activeClass ? "#1890ff" : "rgba(0,0,0,.85)",
                  borderBottom: menu === activeClass ? "2px solid #1890ff" : "",
                  paddingBottom: "14px",
                }}
                to={menu}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                {menu}
              </Link>
            </Menu.Item>
          ))
        )}
        <div className="float-left ml-2">
          <img src="/brand/brand@2x.png" width={50} />
          {!isTabletOrMobileDevice && (
            <Text style={{ fontSize: 20, marginLeft: 6, marginTop: 10 }} strong>
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
        {MOBILE_MENU.map((menu) => (
          <p key={menu}>
            <Link
              onClick={handleDrawer}
              style={{
                color: menu === activeClass ? "#1890ff" : "rgba(0,0,0,.85)",
              }}
              to={menu}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              {menu}
            </Link>
          </p>
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

        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
          .is-active {
            display: none;
          }
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          .is-active {
            display: none;
          }
        }

        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          .is-active {
            display: none;
          }
        }

        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          .is-active {
            display: block;
          }
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          .is-active {
            display: block;
          }
        }

        .active {
          color: #1890ff;
        }
      `}</style>
    </Affix>
  );
}

export default TopHeader;
