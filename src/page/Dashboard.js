import React, { Component } from 'react'
import { Menu, Dropdown, Button, Icon, message, Row, Col } from 'antd'
import Container from '../components/container'
import './Dashboard.css'

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const actions = (
  <Dropdown overlay={menu}>
    <Button style={{ marginLeft: 8 }}>
      Button <Icon type="down" />
    </Button>
  </Dropdown>
)

export default class Dashboard extends Component {

  render() {
    return (
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <Container title="JOHN DOE" actions={actions}>
              <div className='container-block'>container-block</div>
            </Container>
          </Col>
        </Row>
      </div>
    )
  }
}