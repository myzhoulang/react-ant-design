import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom'

// layout
import LayoutHeader from './layout/LayoutHeader'
import Nav from './layout/Nav'

// page
import Dashboard from './page/Dashboard'
import ExternalLiks from './page/content/externalLinks'
import SystemLog from './page/system/Log'

const { Sider, Content, Footer} = Layout

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
      <Router>
        <div>
          <Layout>
            <LayoutHeader collapsed={this.state.collapsed} toggle={this.toggle}/>

            <Layout style={{paddingTop: 64, minHeight: '100vh'}}>
              <Sider
                trigger={null}
                id="side-bar"
                collapsible
                collapsed={this.state.collapsed}>
                <Nav/>
              </Sider>

              <Layout>
                <Content style={{margin: '24px 16px'}}>
                  <Breadcrumb style={{margin: '12px 0'}}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb>

                  <section>
                    <Switch>
                      <Route path="/dashboard" exact strict component={Dashboard}/>
                      <Route path="/links" exact strict component={ExternalLiks}/>
                      <Route path="/SystemLog" exact strict component={SystemLog} />
                    </Switch>
                  </section>

                </Content>

                <Footer style={{textAlign: 'center'}}>
                  Ant Design ©2016 Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default SiderDemo
