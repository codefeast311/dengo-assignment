import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TabsMenu: React.FC = () => (
  <Tabs defaultActiveKey="1">
    <TabPane tab="Approved" key="1">
      Approved Content
    </TabPane>
    <TabPane tab="Awaiting Approval" key="2">
      Awaiting Approval Content
    </TabPane>
  </Tabs>
);

export default TabsMenu;
