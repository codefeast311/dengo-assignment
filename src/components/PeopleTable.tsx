import React, { useState } from "react";
import { Button, Input, Table, Tabs, Drawer, Form, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";

const PeopleTable: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false); // Manage drawer visibility
  const [form] = Form.useForm(); // Use form instance from Ant Design

  const columns = [
    {
      title: <input type="checkbox" />,
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <input type="checkbox" />,
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: any) => (
        <div>
          <span>{text}</span>
          <br />
          <span style={{ color: "#000000" }}>{record.email}</span>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => <span className="status-tag">{status}</span>,
    },
    {
      title: "Property",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Last invited",
      dataIndex: "lastInvited",
      key: "lastInvited",
    },
  ];

  const data = [
    {
      key: "1",
      name: "J P",
      email: "yjoch12@gmail.com",
      status: "Active",
      property: "-",
      unit: "Admin",
      role: "ABC",
      lastInvited: "08/15/2024",
    },
  ];

  // Handle Add Button Click to open drawer
  const handleAddClick = () => {
    setDrawerVisible(true);
  };

  // Handle drawer close
  const handleCloseDrawer = () => {
    setDrawerVisible(false);
    form.resetFields(); // Reset the form fields when the drawer is closed
  };

  // Handle form submit
  const handleFormSubmit = (values: any) => {
    console.log("Form Submitted:", values);
    setDrawerVisible(false); // Close the drawer after form submission
    form.resetFields(); // Reset form fields after successful submission
  };

  const tabItems = [
    {
      key: "1",
      label: "People",
      children: (
        <>
          <div className="table-controls">
            <div className="approval-buttons">
              <Button
                className="approval-button selected"
                style={{ fontSize: "14px" }}
              >
                Approved
              </Button>
              <Button className="approval-button" style={{ fontSize: "14px" }}>
                Awaiting Approval
              </Button>
            </div>
            <div className="export-buttons">
              <div
                style={{
                  display: "flex",
                }}
              >
                <Input
                  placeholder="Search by name or email"
                  prefix={<SearchOutlined style={{ padding: 10 }} />}
                  style={{
                    borderRadius: "32px",
                    background: "#F3F3F3",
                    height: 32,
                    width: 276,
                    border: "none",
                  }}
                  className="search-input"
                />
                <Button
                  icon={
                    <Image
                      src="/images/filter.png"
                      alt="Export"
                      width={24}
                      height={24}
                      priority
                    />
                  }
                  style={{
                    background: "#F3F3F3",
                    marginLeft: 10,
                    height: 32,
                    width: 50,
                  }}
                  className="filter-button"
                ></Button>
              </div>
              <div className="right-buttons">
                <Button
                  icon={
                    <Image
                      src="/images/export.png"
                      alt="Export"
                      width={17}
                      height={17}
                      priority
                    />
                  }
                  className="action-button"
                  style={{
                    height: 32,
                    width: "100%",
                    borderRadius: 3,
                    backgroundColor: "#F0F0F0",
                    border: 0,
                    marginRight: "10px",
                  }}
                >
                  Export
                </Button>

                <Button
                  icon={
                    <Image
                      src="/images/image copy.png"
                      alt="Logo"
                      width={17}
                      height={17}
                      priority
                    />
                  }
                  className="action-button bulk-add-button"
                  style={{
                    height: 32,

                    borderRadius: 3,
                    background: "#f0f0f0",
                    border: 0,
                  }}
                >
                  Bulk Add
                </Button>
                {/* Add button that opens the drawer */}
                <Button
                  icon={
                    <Image
                      src="/images/Add.png"
                      alt="Add"
                      width={17}
                      height={12}
                    />
                  }
                  className="add-button"
                  style={{
                    height: 32,
                    width: "100%",
                    borderRadius: 3,
                    backgroundColor: "#172026",
                    color: "#FFFFFF",
                    border: "none",
                    marginRight: 20,
                    marginLeft: 12,
                  }}
                  onClick={handleAddClick}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="people-table-content"
            style={{
              marginTop: "16px",
              borderTop: "5px solid #F3F3F3",
            }}
          />
        </>
      ),
    },
    {
      key: "2",
      label: "Properties",
      children: <div>Properties Content</div>,
    },
  ];

  return (
    <div className="people-table">
      <h2 className="people-title" style={{ textAlign: "left" }}>
        People
      </h2>
      <Tabs
        items={tabItems}
        tabBarStyle={{
          borderBottom: "1px solid #e8e8e8",
          marginLeft: 20,
        }}
        renderTabBar={(props, DefaultTabBar) => (
          <DefaultTabBar {...props} className="customTabBar" />
        )}
      />

      {/* Drawer Component */}
      <Drawer
        title={null}
        placement="right"
        onClose={handleCloseDrawer}
        closable={false}
        open={drawerVisible}
        width={366}
        bodyStyle={{
          padding: "24px 40px", // Proper padding for alignment
          paddingBottom: 80,
        }}
      >
        <h2
          style={{
            fontWeight: "600",
            fontSize: "20px",
            marginBottom: "10px", // Align with the input below
            padding: 0,
          }}
        >
          Edit
        </h2>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            property: "",
            unit: "",
          }}
          onFinish={handleFormSubmit}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            style={{ marginBottom: "10px", fontWeight: 600 }}
          >
            <Input
              style={{
                height: "34px",
                width: "288px",
                borderRadius: "3px",
                background: "#F3F3F3",
                padding: "8px",
                border: "none",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            style={{ marginBottom: "10px", fontWeight: 600 }}
          >
            <Input
              style={{
                height: "34px",
                width: "288px",
                borderRadius: "3px",
                background: "#F3F3F3",
                padding: "8px",
                border: "none",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            style={{ marginBottom: "10px", fontWeight: 600 }}
          >
            <Input
              style={{
                height: "34px",
                width: "288px",
                borderRadius: "3px",
                background: "#F3F3F3",
                padding: "8px",
                border: "none",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            style={{ marginBottom: "10px", fontWeight: 600 }}
          >
            <Input
              style={{
                height: "34px",
                width: "288px",
                borderRadius: "3px",
                background: "#F3F3F3",
                padding: "8px",
                border: "none",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Property"
            name="property"
            style={{ marginBottom: "10px", fontWeight: 600 }}
          >
            <Select
              className="custom-select"
              style={{
                height: "34px",
                width: "288px",
                borderRadius: "3px", // Rounded corners
                backgroundColor: "#F3F3F3", // Light grey background
                border: "none", // Remove border for flat design
                fontWeight: 600, // Bold font to match design
                fontSize: "13px", // Font size as seen in the design
              }}
              dropdownStyle={{
                backgroundColor: "#F3F3F3", // Light grey background for dropdown
                borderRadius: "3px", // Rounded corners for dropdown as well
                border: "none", // No border for dropdown
              }}
            >
              <Select.Option value="ABC">ABC</Select.Option>
              <Select.Option value="PQR">PQR</Select.Option>
              <Select.Option value="XYZ">XYZ</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Unit"
            name="unit"
            style={{ marginBottom: "10px", fontWeight: 600 }}
          >
            <Input
              style={{
                height: "34px",
                width: "288px",
                borderRadius: "3px",
                background: "#F3F3F3",
                padding: "8px",
                border: "none",
              }}
            />
          </Form.Item>
          <div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#172026",
                  color: "#FFFFFF",
                  width: "288px",
                  height: "50px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "3px",
                  marginTop: "90px",
                  // padding: "7px",
                }}
              >
                Save
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                onClick={handleCloseDrawer}
                style={{
                  color: "#000000",
                  width: "288px",
                  height: "30px",
                  border: "none",
                  fontSize: "16px",
                }}
              >
                Cancel
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Drawer>
    </div>
  );
};

export default PeopleTable;
