import React, { Component } from 'react'
import { Menu, Dropdown, Button, Icon, Row, Col,Table } from 'antd'

import ChartLine from '../components/chart/ChartLine.js'
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


// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a>{text}</a>,
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];



export default class Dashboard extends Component {

  componentDidMount(){

  }


  render() {
    return (
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <Container title="JOHN DOE" actions={actions} subTitle='这是副标题'>
              <div className='container-block'>
                <Table size="small" columns={columns} dataSource={data} bordered />
              </div>
            </Container>
          </Col>

          <Col className="gutter-row" span={12}>
            <Container title="聚贸资讯用户增长图">
              <div className='container-block'>
                <ChartLine />
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    )
  }
}
