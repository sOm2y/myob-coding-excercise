import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Uploader from './components/uploader';
import PayslipTable from './components/payslipTable';
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
            MYOB CODING EXERCISE ©2018 Created by Yue Yin
        </Footer>
      </Layout>
    );
  }
}

export default App;
