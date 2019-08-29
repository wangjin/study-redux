import React, { Component } from 'react'
import store from '../../store'
import {
  inputValueChangeAction,
  addItemAction,
  removeItemAction,
  getWorkList
} from '../../store/ActionCreator'
import ToDoListUI from './ToDoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
    this.removeItem = this.removeItem.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  componentDidMount() {
    store.dispatch(getWorkList())
  }

  render() {
    return (
      <ToDoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        list={this.state.list}
        buttonClick={this.buttonClick}
        removeItem={this.removeItem}
      />
    )
  }

  changeInputValue(e) {
    store.dispatch(inputValueChangeAction(e.target.value))
  }

  storeChange() {
    this.setState(store.getState())
  }

  buttonClick() {
    store.dispatch(addItemAction())
  }

  removeItem(index) {
    store.dispatch(removeItemAction(index))
  }
}
export default TodoList
