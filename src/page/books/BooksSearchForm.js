import React, { Component } from 'react'
import { Checkbox, Row, Col, Input, DatePicker, Form, Button } from 'antd'


const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group
const {RangePicker} = DatePicker

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  },
};
const options = [
  {
    label: 'Apple',
    value: 'Apple'
  },
  {
    label: 'Pear',
    value: 'Pear'
  },
  {
    label: 'Orange',
    value: 'Orange'
  },
];



export default class SearchForm extends Component {
  submit(e) {
    e.preventDefault();
    let values = this.props.form.getFieldsValue()
    let rangeValue = values['date']
    console.log({
      ...values,
      'range-picker': [rangeValue[0].format('YYYY-MM-DD HH:mm:ss'), rangeValue[1].format('YYYY-MM-DD HH:mm:ss')]
    })
  }

  onChange() {}

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.submit.bind(this)} style={{
        backgroundColor: '#fff',
        padding: '24px'
      }}>
        <Row gutter={26}>
          <Col span={6}>
            <FormItem {...formItemLayout} label='操作员帐号'>

            {getFieldDecorator('userName', {

      })(
        <Input size="large" placeholder="placeholder" />
      )}

            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem {...formItemLayout} label='操作时间'>
            {getFieldDecorator('date', {

      })(
        <RangePicker style={{
          width: '100%'
        }} size="large" showTime format="YYYY-MM-DD HH:mm:ss" />
      )}
            </FormItem>
          </Col>

          <Col span={6}>
            <FormItem {...formItemLayout} label='操作内容'>
            {getFieldDecorator('content', {

      })(
        <Input size="large" placeholder="placeholder" />
      )}
            </FormItem>
          </Col>

          <Col span={4}>
            <Button size='large' type="primary" htmlType="submit">搜索</Button>
            <Button size='large' style={{
        marginLeft: 8
      }} onClick={this.handleReset}> 清除</Button>
          </Col>
        </Row>

        <Row gutter={26}>
          <Col span={12}>
            <FormItem wrapperCol={{
        span: 21
      }} labelCol={{
        span: 3
      }} label='数据范围'>
              <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange.bind(this)} />
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}
