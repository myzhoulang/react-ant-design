import React, { Component } from 'react'
import { Table, Form } from 'antd'
import SearchForm from './SearchForm'

const WrappedTimeRelatedForm = Form.create()(SearchForm)

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a >{text}</a>,
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



export default class ExternalLiks extends Component {
  render() {
    return (
      <div>
        <WrappedTimeRelatedForm  />
        <Table
          size='small'
          style={{ marginTop: '20px', backgroundColor: '#fff', padding: '24px' }}
          columns={columns}
          dataSource={data}
          // loading={true}
          bordered
        />
      </div>
    )
  }
}
