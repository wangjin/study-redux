import { INPUT_VALUE_CHANGE, ADD_ITEM, REMOVE_ITEM } from './ActionType'

export const inputValueChangeAction = value => ({
  type: INPUT_VALUE_CHANGE,
  value
})

export const addItemAction = () => ({ type: ADD_ITEM })

export const removeItemAction = index => ({ type: REMOVE_ITEM, index })
