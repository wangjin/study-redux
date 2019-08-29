import {
  INPUT_VALUE_CHANGE,
  ADD_ITEM,
  REMOVE_ITEM,
  GET_WORK_LIST
} from './ActionType'

import axios from 'axios'

export const inputValueChangeAction = value => ({
  type: INPUT_VALUE_CHANGE,
  value
})

export const addItemAction = () => ({ type: ADD_ITEM })

export const removeItemAction = index => ({ type: REMOVE_ITEM, index })

export const getWorkListAction = list => ({ type: GET_WORK_LIST, list })

export const getWorkList = () => {
  return dispatch => {
    axios
      .get(
        'https://www.easy-mock.com/mock/5d56633cbf6a0d2f8f419886/study-react/work-list'
      )
      .then(res => {
        dispatch(getWorkListAction(res.data.list))
      })
  }
}
