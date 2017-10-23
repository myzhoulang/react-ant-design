import React, { Component } from 'react'
import { Layout, Row, Col, Menu, Icon, Badge, Avatar } from "antd"
import logo from "../logo.png"
import './layout.css'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const { Header, Sider, Content, Footer } = Layout

export default class LayoutHeader extends Component {
  constructor(props) {
    super(...props)
  }
  render() {
    return (
      <Header id="header" style={{ position: 'fixed', width: '100%', zIndex: 2, padding: '0 15px' }}>
        <Row>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <div className="logo">
                <img src={logo} alt="聚贸资讯后台管理系统" />
              </div>
              <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
              />
            </div>
          </Col>
          <Col span={10}>
            <div className='gutter-box'></div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box" style={{ marginTop: '9px', fontSize: '16px' }}>
              <Menu
                theme="dark"
                mode="horizontal">
                <Menu.Item key="mail">
                  <Icon type="mail" /> English
                </Menu.Item>

                <Menu.Item key="app">
                  <Badge count={258}>
                    <Icon type="notification" />
                  </Badge>
                </Menu.Item>

                <SubMenu title={<Badge count={258}><Icon type="setting" /></Badge>}>
                  <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>

                <SubMenu className="admin-user" title={
                  <span>
                    <Avatar icon="user" style={{ verticalAlign: 'middle' }} />
                    <span className="user-name" style={{ padding: "1.5rem .6rem" }}>zhoul</span>
                    <Icon type="down" />
                  </span>
                }>
                  <MenuItemGroup className="actions">
                    <Menu.Item key="user:1">
                      <Icon type="setting" />Setting
                    </Menu.Item>
                        <Menu.Item key="user:2">
                          <Icon type="user" />Profile
                    </Menu.Item>
                        <Menu.Item key="user:3">
                          <Icon type="message" />My Message
                    </Menu.Item>
                        <Menu.Item key="user:4">
                          <Icon type="lock" />Lock Screen
                    </Menu.Item>
                        <Menu.Item key="user:5">
                          <Icon type="logout" />Login Out
                    </Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              </Menu>
            </div>
          </Col>
        </Row>
      </Header>
    )
  }
}

