import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons"; // For the burger icon

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false); // State to control mobile drawer

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const menuItems = [
    { key: "home", label: "Home", icon: "/images/home.png" },
    { key: "program", label: "Program", icon: "/images/Program.png" },
    { key: "people", label: "People", icon: "/images/People.png" },
    { key: "activity", label: "Activity", icon: "/images/Activity.png" },
    { key: "billing", label: "Billing", icon: "/images/Bill.png" },
    {
      key: "marketplace",
      label: "Marketplace",
      icon: "/images/Marketplace.png",
    },
    { key: "insights", label: "Insights", icon: "/images/insight.png" },
  ];

  return (
    <>
      {/* Sidebar visible on larger screens */}
      <Sider
        width={264}
        style={{
          background: "#fff",
          borderRight: "1.5px solid #E8E8E8",
          paddingTop: 50,
          transition: "width 0.3s ease",
        }}
        className="sidebar" // Optional class for additional styling
      >
        <Menu
          defaultSelectedKeys={["people"]}
          mode="inline"
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            borderRight: "none", // No border inside menu items, only on sidebar
          }}
          items={menuItems.map((item) => ({
            key: item.key,
            label: (
              <span
                style={{
                  marginLeft: "10px",
                  fontFamily: "Neue Haas Grotesk Display Pro, sans-serif",
                  fontSize: "16px",
                }}
              >
                {item.label}
              </span>
            ),
            icon: (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "24px",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
              </div>
            ),
            style: {
              borderRight: "none",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              height: "48px",
              padding: "12px 0 12px 18px",
            },
          }))}
        />
      </Sider>

      {/* Burger menu button visible only on mobile */}
      <Button
        className="mobile-menu-button"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={{
          position: "absolute",
          top: "16px",
          left: "16px",
          zIndex: 1000, // Make sure it's above other elements
          background: "none",
          border: "none",
          fontSize: "24px",
          display: "none", // Hidden by default, shown via CSS media queries on mobile
        }}
      />

      {/* Drawer for mobile sidebar */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
        bodyStyle={{ padding: "0" }}
        width={264}
      >
        <Menu
          defaultSelectedKeys={["people"]}
          mode="inline"
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            borderRight: "none", // No border inside menu items, only on sidebar
          }}
          items={menuItems.map((item) => ({
            key: item.key,
            label: (
              <span
                style={{
                  marginLeft: "10px",
                  fontFamily: "Neue Haas Grotesk Display Pro, sans-serif",
                  fontSize: "16px",
                }}
              >
                {item.label}
              </span>
            ),
            icon: (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "24px",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
              </div>
            ),
            style: {
              borderRight: "none",
              boxShadow: "none",
              display: "flex",
              alignItems: "center",
              height: "48px",
              padding: "12px 0 12px 18px",
            },
          }))}
        />
      </Drawer>
    </>
  );
};

export default Sidebar;
