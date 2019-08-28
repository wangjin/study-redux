import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from '../../store'
import {
  inputValueChange,
  addItem,
  removeItem
} from '../../store/ActionCreator'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  render() {
    return (
      <div>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: '250px' }}
            onChange={this.changeInputValue}
          />
          <Button type="primary" onClick={this.buttonClick}>
            增加
          </Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.removeItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }

  changeInputValue(e) {
    store.dispatch(inputValueChange(e.target.value))
  }

  storeChange() {
    this.setState(store.getState())
  }

  buttonClick() {
    store.dispatch(addItem())
  }

  removeItem(index) {
    store.dispatch(removeItem(index))
  }
}
export default TodoList
