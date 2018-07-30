import * as actionTypes from '../utils/actionTypes';
import axios from 'axios'

/**
 * リスト取得
 * @param  {String} code カテゴリコード
 */
export const getList = (code) => ({
  type: actionTypes.GET_LIST,
  code
})

const getListRequest = (code) => {
  return {
    type: actionTypes.GET_LIST_REQUEST,
    code
  }
}

const getListSuccess = (json) => {
  return {
    type: actionTypes.GET_LIST_SUCCESS,
    links: json,
    receivedAt: Date.now()
  }
}

const getListFailure = (error) => {
  type: actionTypes.GET_LIST_FAILURE,
  error
}

export const getLinkList = (code) => {
  return (dispatch) => {
    dispatch(getListRequest(code))
    return axios.get('http://localhost:3001/links/' + code)
      .then(res =>
        dispatch(getListSuccess(res.data))
      ).catch(err =>
        dispatch(getListFailure(err))
      )
  }
}

/**
 * コードを設定
 * @param  {String} code カテゴリコード
 */
export const setCode = (code) => ({
  type: actionTypes.SET_CODE,
  code
})

/**
 * カテゴリ一覧を初期化
 */
export const initCategory = () => ({
  type: actionTypes.INIT_CATEGORY
})
