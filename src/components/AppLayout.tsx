import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import CustomHeader from "./Header";
import PeopleTable from "./PeopleTable";

const { Content } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#fff" }}>
      <CustomHeader />
      <Layout>
        <Sidebar />
        <Content
          style={{
            padding: "8px",
            background: "#fff",
            transition: "margin-left 0.3s ease",
          }}
        >
          <PeopleTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
