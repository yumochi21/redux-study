import React from 'react'
import './Content.css'

/**
 * コンテンツコンポーネント
 * @param {Object} children 子要素
 */
const Content = ({children}) => (
  <div className="Content">
    {children}
  </div>
)

export default Content
