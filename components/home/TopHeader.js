import { Typography, Affix, Menu, Drawer } from "antd";
import { useEffect, useState } from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Link, Events, scrollSpy } from "react-scroll";

const { Text } = Typography;

function TopHeader({
  newsRef,
  learnRef,
  aboutRef,
  topHeaderRef,
  contactUsRef,
  mapRef,
}) {
  let [transparent, setTransparent] = useState(false);

  let MENU = [
    "Location",
    "Contact Us",
    "About",
    "News",
    "Learn Skills",
    "Home",
  ];
  let MOBILE_MENU = [
    "Home",
    "Learn Skills",
    "News",
    "About",
    "Contact Us",
    "Location",
  ];

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [menuActive, setMenuActive] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMenuActive(entries[0].target.id);
          history.pushState({}, null, `#${entries[0].target.id}`);
        }
      },
      { threshold: 0.7 }
    );
    [
      topHeaderRef.current,
      learnRef.current,
      newsRef.current,
      aboutRef.current,
      contactUsRef.current,
      mapRef.current,
    ].forEach((ref) => {
      observer.observe(ref);
    });

    Events.scrollEvent.register("begin", function (to, element) {});

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
  }, [newsRef, learnRef, aboutRef, topHeaderRef, contactUsRef, mapRef]);

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
        <Menu.Item className="float-right is-active" key={-1}>
          <MenuFoldOutlined
            onClick={handleDrawer}
            style={{ fontSize: 20, marginRight: 6 }}
          />
        </Menu.Item>

        {MENU.map((menu, index) => (
          <Menu.Item
            active={false}
            className="float-right is-active-desktop"
            key={index}
          >
            <a
              style={{
                color: menuActive === menu ? "#1890ff" : "rgba(0,0,0,.85)",
                borderBottom:
                  menuActive === menu
                    ? "2px solid #59affd"
                    : " 0px solid white",
                paddingBottom: 10,
              }}
              href={`#${menu}`}
            >
              {menu}
            </a>
          </Menu.Item>
        ))}

        <div className="float-left ml-2">
          <img src="/brand/brand@2x.png" width={50} />

          <Text
            className="title-is-active-desktop"
            style={{ fontSize: 20, marginLeft: 6, marginTop: 10 }}
            strong
          >
            WMSU Computer Engineering
          </Text>
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

        :target::before {
          content: "";
          display: block;
          height: 100px; /* fixed header height*/
          margin: -100px 0 0; /* negative fixed header height */
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
          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active {
            display: block;
          }

          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active-desktop {
            display: none;
          }

          span.ant-typography.is-active-desktop {
            display: none;
          }

          span.ant-typography.title-is-active-desktop {
            display: none;
          }
        }

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active {
            display: block;
          }

          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active-desktop {
            display: none;
          }

          span.ant-typography.is-active-desktop {
            display: none;
          }

          span.ant-typography.title-is-active-desktop {
            display: none;
          }
        }

        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active {
            display: none;
          }

          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active-desktop {
            display: block;
          }
          span.ant-typography.title-is-active-desktop {
            display: initial;
          }
        }

        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active {
            display: none;
          }

          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active-desktop {
            display: block;
          }
          span.ant-typography.title-is-active-desktop {
            display: initial;
          }
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active {
            display: none;
          }
          li.ant-menu-item.ant-menu-item-only-child.float-right.is-active-desktop {
            display: block;
          }
          span.ant-typography.title-is-active-desktop {
            display: initial;
          }
        }

        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected,
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover {
          color: rgba(249, 249, 249, 0.9);
          border-bottom: 0px solid white;
        }
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
        .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover {
          color: #4d4d4d;
          border-bottom: 0px solid white;
        }
      `}</style>
    </Affix>
  );
}

export default TopHeader;
