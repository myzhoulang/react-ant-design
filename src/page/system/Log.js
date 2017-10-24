import React, { Component } from 'react'
import { Table, Form, Button, Tag } from 'antd'
import SearchForm from './LogSearchForm'

const WrappedTimeRelatedForm = Form.create()(SearchForm)

const tagColors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue','purple']
const columns = [{
  title: '书名',
  dataIndex: 'title',
  width: '20%',
  render: text => <a >{text}</a>,
}, {
  title: '封面',
  width: '5%',
  className: 'image',
  dataIndex: 'image',
  render: url => <div style={{textAlign:'center'}}><img src={url} height='50' /></div>
}, {
  title: '作者',
  width: '15%',
  dataIndex: 'author',
}, {
  title: '价格',
  width: '10%',
  dataIndex: 'price',
},{
  title:'发布时间',
  width: '10%',
  dataIndex:'pubdate'
},{
  title:'好评度',
  width: '10%',
  dataIndex:'rating',
  render: text => text.average
},
{
  title:'标签',
  width: '25%',
  dataIndex: 'tags',
  render: (text) => {
    let tags = text.map((item, index) => <Tag style={{ marginBottom:'5px'}} key={item.name} color={tagColors[index]}>{item.name}</Tag>)
    return tags;
  }
},{
  title:'操作',
  dataIndex: 'id',
  render: (text, record) => <a href={record.url}>去购买</a>
}];


export default class Log extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      books: []
    }
  }

  // 获取列表
  async getSystemLogs(params = {}){
    this.setState({
      loaded: true
    })
    let {books} = await fetch(`/book/search?q=python&fields=id,title,rating,url,image,author,price,pubdate,tags`, {
      method:'GET',
      headers:{
        contentType:'application/json',
      }
    }).then((res) => res.json())

    books = books.map((item, index) => { item.key = index; return item})

    this.setState({
      loaded: false,
      books: books
    })
  }

  componentWillMount(){
    this.getSystemLogs()
  }

  render() {
    return (
      <div>
        <WrappedTimeRelatedForm />
        <Table
          style={{ marginTop: '20px', backgroundColor: '#fff', padding: '24px' }}
          columns={columns}
          dataSource={this.state.books}
          loading={this.state.loaded}
          bordered
        />
      </div>
    )
  }
}
