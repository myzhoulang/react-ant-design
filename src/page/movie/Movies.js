import React, {Component} from 'react'
import {Table, Form, Button, Tag} from 'antd'
import MoviesSearchForm from './MoviesSearchForm'

// 搜索表单
const WrappedTimeRelatedForm = Form.create()(MoviesSearchForm)

// 表格栏目配置
const columns = [
  {
    title: '书名',
    dataIndex: 'title',
    width: '20%',
    render: text => <a>
        {text
}
      </a>
  }, {
    title: '封面',
    width: '5%',
    className: 'text-center',
    dataIndex: 'image',
    render: url => <div>
        <img src={url} height='50'/></div>
  }, {
    title: '作者',
    width: '15%',
    className: 'text-center',
    dataIndex: 'author'
  }, {
    title: '价格',
    width: '10%',
    className: 'text-center',
    dataIndex: 'price'
  }, {
    title: '发布时间',
    width: '10%',
    className: 'text-center',
    dataIndex: 'pubdate'
  }, {
    title: '好评度',
    width: '10%',
    className: 'text-center',
    dataIndex: 'rating',
    render: text => text.average
  }, {
    title: '标签',
    width: '25%',
    dataIndex: 'genres',
    render: (text) => {
      let tags = text.map((item, index) => <Tag style={{
        marginBottom: '5px'
      }} key={item.name} color={tagColors[index]}>
        {item.name
}
      </Tag>)
      return tags;
    }
  }, {
    title: '操作',
    dataIndex: 'id',
    className: 'text-center',
    render: (text, record) => <a href={record.url}>
        去购买
      </a>
  }
];

const tagColors = [
  'pink',
  'red',
  'orange',
  'green',
  'cyan',
  'blue',
  'purple'
]

export default class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      loaded: false
    }
  }

  async getMovies(params = {}) {

    this.setState({loaded: true})
    let movies
    let {subjects} = await fetch(`/movie/search?q=张艺谋`, {
      method: 'GET',
      headers: {
        contentType: 'application/json'
      }
    }).then((res) => res.json())

    movies = subjects.map((item, index) => {
      item.key = index;
      return item
    })

    this.setState({loaded: false, movies: movies})
  }

  componentWillMount() {
    this.getMovies()
  }

  render() {
    return (
      <div>
        <WrappedTimeRelatedForm/>
        <Table style={{
          marginTop: '20px',
          backgroundColor: '#fff',
          padding: '24px'
        }} columns={columns} dataSource={this.state.movies} loading={this.state.loaded} bordered/>
        </div>
