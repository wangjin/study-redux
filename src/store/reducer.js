const defaultState = {
  inputValue: '输入一些值',
  list: ['早上8点开会', '早上9点喝咖啡', '下午5点下班']
} //默认数据
export default (state = defaultState, action) => {
  //就是一个方法函数
  return state
}
