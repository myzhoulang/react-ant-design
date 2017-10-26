import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
// layout
import LayoutHeader from './layout/LayoutHeader'
import Nav from './layout/Nav'


// dashboard
import Dashboard from './page/Dashboard'

// 书籍
import Books from './page/books/Books'

// 电影
import Movies from './page/movie/Movies'


const {Sider, Content, Footer} = Layout

class SiderDemo extends React.Component {
  
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Layout>
            <LayoutHeader collapsed={this.state.collapsed} toggle={this.toggle}/>

            <Layout style={{
        paddingTop: 64,
        minHeight: '100vh'
      }}>
              <Sider trigger={null} id="side-bar" collapsible collapsed={this.state.collapsed}>
                <Nav/>
              </Sider>

              <Layout>
                <Content style={{
        margin: '24px 16px'
      }}>
                  <Breadcrumb style={{
        margin: '12px 0'
      }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb>

                  <section>
                    <Switch>
                      <Route path="/dashboard" exact strict component={Dashboard}/>
                      <Route path="/books" exact strict component={Books}/>
                      <Route path="/movies" exact strict component={Movies}/>
                    </Switch>
                  </section>

                </Content>

                <Footer className="text-center">
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
