import * as actionTypes from '../utils/actionTypes'

/**
 * ステートの初期状態
 * @type {Object}
 */
const initialAppState = {
  categories: [
    {code: '001', label: 'Java'},
    {code: '002', label: 'CSS'}
  ]
}

/**
 * カテゴリリデューサー
 * @param  {Object} [state=initialAppState] 変更前ステート
 * @param  {Object} action                  アクション
 * @return {Object}                         変更後ステート
 */
const list = (state = initialAppState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CATEGORY:
      return {
        ...state,
        categories: [
          {code: '001', label: 'Java'},
          {code: '002', label: 'CSS'},
          {code: '003', label: 'HTML'},
          {code: '004', label: 'C#'},
          {code: '005', label: '機会学習'},
          {code: '006', label: 'ビジネス'},
          {code: '007', label: 'サンプル'},
          {code: '008', label: 'テスト'}
        ]
      }
    default:
      return state
  }
}

export default list
