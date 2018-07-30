import * as actionTypes from '../utils/actionTypes';

/**
 * リスト取得
 * @param  {String} code カテゴリコード
 */
export const getList = (code) => ({
  type: actionTypes.GET_LIST,
  code
})

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
