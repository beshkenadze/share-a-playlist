import React from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Select, Form, Button } from 'antd';
import { CollectionsPage } from '../components/NewPlaylist';

const { Header, Content, Footer } = Layout;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

const Playlists = () => (
  <div>
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Row type="flex" justify="center">
          <Col span={12}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Form layout="inline" onSubmit={() => {
              }}>
                <Form.Item>
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Form.Item>
              </Form>
              <CollectionsPage />
            </div>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>

    <style jsx>{`
      #components-layout-demo-top .logo {
        width: 120px;
        height: 31px;
        background: rgba(255,255,255,.2);
        margin: 16px 24px 16px 0;
        float: left;
      }
    `}</style>
  </div>
);

export default Playlists
