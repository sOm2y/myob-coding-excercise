import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Uploader from './Components/uploader';
import PayslipTable from './Components/payslipTable';
import logo from './Assets/logo.svg';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >

          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Payslip</Breadcrumb.Item>

          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>
            <Uploader />
            <PayslipTable />
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
