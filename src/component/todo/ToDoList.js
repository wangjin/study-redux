import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const data = ['早上8点开会', '早上9点喝咖啡', '下午5点下班']
class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <Input placeholder="jspang" style={{ width: '250px' }} />
          <Button type="primary">增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    )
  }
}
export default TodoList
