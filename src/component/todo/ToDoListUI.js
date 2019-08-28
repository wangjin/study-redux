import React from 'react'
import 'antd/dist/antd.css'
import { Input, List, Button } from 'antd'

const ToDoListUI = props => (
  <div style={{ margin: '10px' }}>
    <div>
      <Input
        placeholder={props.inputValue}
        style={{ width: '250px', marginRight: 10 }}
        onChange={props.changeInputValue}
      />
      <Button type="primary" onClick={props.buttonClick}>
        增加
      </Button>
    </div>
    <div style={{ margin: '10px', width: '300px' }}>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.removeItem(index)
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  </div>
)

export default ToDoListUI
