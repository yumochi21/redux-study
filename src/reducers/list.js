import * as actionTypes from '../utils/actionTypes'

/**
 * ステートの初期状態
 * @type {Object}
 */
const initialAppState = {
  links: [
    {code: '00001', category: '0001', label: 'Java1', url: 'https://google.co.jp/'},
    {code: '00002', category: '0001', label: 'Java2', url: 'https://google.co.jp/'},
    {code: '00003', category: '0001', label: 'Java3', url: 'https://google.co.jp/'},
    {code: '00004', category: '0001', label: 'Java4', url: 'https://google.co.jp/'},
    {code: '00005', category: '0001', label: 'Java5', url: 'https://google.co.jp/'},
    {code: '00006', category: '0001', label: 'Java6', url: 'https://google.co.jp/'},
    {code: '00007', category: '0001', label: 'Java7', url: 'https://google.co.jp/'}
  ],
  title: 'カテゴリを選択してください',
  code: ''
}

/**
 * リストリデューサー
 * @param  {Object} [state=initialAppState] 変更前ステート
 * @param  {Object} action                  アクション
 * @return {Object}                         変更後ステート
 */
const list = (state = initialAppState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return {
        ...state,
        links: getList(action.code)
      }
    case actionTypes.GET_LIST_REQUEST:
      console.log('request')
      return {
        ...state,
        links: []
      }
    case actionTypes.GET_LIST_SUCCESS:
      console.log('success')
      return {
        ...state,
        links: action.links
      }
    case actionTypes.GET_LIST_FAILURE:
      console.log('error')
      return {
        ...state,
        links: []
      }
    case actionTypes.SET_CODE:
      return {
        ...state,
        code: action.code
      }
    default :
      return state
  }
}

/**
 * リンクリストを取得する
 * @param  {String} code カテゴリコード
 * @return {Array}      リンクリスト
 */
const getList = (code) => {
  if (code === '001') {
    return [
      {code: '00001', category: '0001', label: 'Java1', url: 'https://google.co.jp/'},
      {code: '00002', category: '0001', label: 'Java2', url: 'https://google.co.jp/'},
      {code: '00003', category: '0001', label: 'Java3', url: 'https://google.co.jp/'},
      {code: '00004', category: '0001', label: 'Java4', url: 'https://google.co.jp/'},
      {code: '00005', category: '0001', label: 'Java5', url: 'https://google.co.jp/'},
      {code: '00006', category: '0001', label: 'Java6', url: 'https://google.co.jp/'},
      {code: '00007', category: '0001', label: 'Java7', url: 'https://google.co.jp/'}
    ]
  } else {
    return [
      {code: '00001', category: '0001', label: 'JS1', url: 'https://google.co.jp/'},
      {code: '00002', category: '0002', label: 'JS2', url: 'https://google.co.jp/'},
      {code: '00003', category: '0002', label: 'JS3', url: 'https://google.co.jp/'},
      {code: '00004', category: '0002', label: 'JS4', url: 'https://google.co.jp/'},
      {code: '00005', category: '0002', label: 'JS5', url: 'https://google.co.jp/'},
      {code: '00006', category: '0002', label: 'JS6', url: 'https://google.co.jp/'},
      {code: '00007', category: '0002', label: 'JS7', url: 'https://google.co.jp/'}
    ]
  }
}

export default list
