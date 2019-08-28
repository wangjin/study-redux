import { INPUT_VALUE_CHANGE, ADD_ITEM, REMOVE_ITEM } from './ActionType'

export const inputValueChange = value => ({ type: INPUT_VALUE_CHANGE, value })

export const addItem = () => ({ type: ADD_ITEM })

export const removeItem = index => ({ type: REMOVE_ITEM, index })
