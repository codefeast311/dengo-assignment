import React, { useState } from "react";
import { Layout, Badge, Avatar, Button, Space, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Header } = Layout;

const CustomHeader: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false); // State to control mobile drawer

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Header
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "space-between", // Adjusted to handle logo and avatar on mobile
          alignItems: "center",
          borderBottom: "1.5px solid #E8E8E8",
          padding: "0 24px",
        }}
      >
        {/* Logo in the header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <p
            className="logo-text"
            style={{
              fontFamily: "Boston Angel",
              fontSize: "34px",
              fontWeight: 300,
              lineHeight: "44px",
              color: "#FF554B",
            }}
          >
            dengo
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Image
              src="/images/logo_text.png"
              alt="Logo"
              width={90}
              height={21}
              priority
            />
          </div>
        </div>

        {/* Right actions (shown only on larger screens) */}
        <Space
          size="middle"
          className="header-actions"
          style={{
            display: "flex", // Shown on larger screens
          }}
        >
          <Button
            className="header-action-active"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "24px",
              padding: "4px 16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Badge color="#52C41A" style={{ marginRight: "6px" }} />
            <span style={{ fontWeight: 500 }}>Active</span>
          </Button>

          <Button
            className="header-action-help"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "24px",
              border: "none",
              display: "flex",
              alignItems: "center",
              padding: "4px 16px",
            }}
            icon={
              <Image
                src="/images/image.png"
                alt="Help"
                width={17}
                height={17}
                priority
              />
            }
          >
            <span style={{ fontWeight: 500 }}>Help</span>
          </Button>

          <Avatar
            style={{
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "16px",
            }}
            size="large"
          >
            CV
          </Avatar>

          {/* Burger Menu for Mobile */}
          <Button
            className="mobile-menu-button"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{
              background: "none",
              border: "none",
              fontSize: "20px",
            }}
          />
        </Space>

        {/* Mobile Avatar */}
        <Avatar
          className="mobile-avatar"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "16px",
            display: "none", // Shown only on mobile via CSS
          }}
          size="large"
        >
          CV
        </Avatar>
      </Header>

      {/* Drawer for mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        bodyStyle={{ padding: "16px" }}
      >
        {/* Same items inside the drawer for mobile view */}
        <Button
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "24px",
            padding: "4px 16px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <Badge color="#52C41A" style={{ marginRight: "6px" }} />
          <span style={{ fontWeight: 500 }}>Active</span>
        </Button>

        <Button
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "24px",
            border: "none",
            display: "flex",
            alignItems: "center",
            padding: "4px 16px",
            width: "100%",
            marginBottom: "10px",
          }}
          icon={
            <Image
              src="/images/image.png"
              alt="Help"
              width={17}
              height={17}
              priority
            />
          }
        >
          <span style={{ fontWeight: 500 }}>Help</span>
        </Button>

        <Avatar
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
          size="large"
        >
          CV
        </Avatar>
      </Drawer>
    </>
  );
};

export default CustomHeader;
