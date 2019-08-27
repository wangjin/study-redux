const defaultState = {
  inputValue: '输入一些值',
  list: ['早上8点开会', '早上9点喝咖啡', '下午5点下班']
} //默认数据
export default (state = defaultState, action) => {
  //就是一个方法函数
  // Reducer里只能接收state，不能改变state
  let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
  switch (action.type) {
    case 'change_input_value':
      newState.inputValue = action.value
      return newState
    case 'add_item':
      newState.list.push(newState.inputValue) // 输入内容添加到list
      newState.inputValue = '' // 输入框置空
      return newState
    case 'remove_item':
      newState.list.splice(action.index, 1)
      return newState
    default:
      break
  }
  return state
}
