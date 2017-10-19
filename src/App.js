import React from 'react'
import { Layout, Menu, Icon, Breadcrumb, Row, Col, Avatar, Badge } from 'antd'
import logo from './logo.png'

import Userprofile from "./components/user/Userprofile"
import Mainnav from './components/Mainnav'

const { Header, Sider, Content, Footer } = Layout
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class SiderDemo extends React.Component {
	state = {
		collapsed: false,
	};
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	render() {
		return (
			<div>
				<Layout>
					<Header id="header" style={{ position: 'fixed', width: '100%', zIndex: 2, padding: '0 15px' }}>
						<Row>
							<Col className="gutter-row" span={6}>
								<div className="gutter-box">
									<div className="logo">
										<img src={logo} />
									</div>
									<Icon

										className="trigger"
										type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
										onClick={this.toggle}
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
										onClick={this.handleClick}
										selectedKeys={[this.state.current]}
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
										<Menu.Item key="alipay">
											<Userprofile />
										</Menu.Item>
									</Menu>
								</div>
							</Col>
						</Row>
					</Header>

					<Layout style={{ paddingTop: 64, minHeight: '100vh' }}>

						<Sider
							trigger={null}
							id="side-bar"
							collapsible
							collapsed={this.state.collapsed}>
							<Mainnav />
						</Sider>

						<Layout>
							<Content style={{ margin: '24px 16px' }}>
								<Breadcrumb style={{ margin: '12px 0' }}>
									<Breadcrumb.Item>User</Breadcrumb.Item>
									<Breadcrumb.Item>Bill</Breadcrumb.Item>
								</Breadcrumb>

								<section style={{  padding: 24, minHeight: 280 }}>
									Content
			          </section>

							</Content>

							<Footer style={{ textAlign: 'center' }}>
								Ant Design ©2016 Created by Ant UED
				      </Footer>
						</Layout>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default SiderDemo