import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_PATH } from '../../constants/path'
import './Header.css'

/**
 * ヘッダーコンポーネント
 */
const Header = () => (
  <div className="Header">
    <a className="Header-Logo" href="/"><img src={IMG_PATH + 'logo.png'} alt="Strayer" />Strayer</a>
    <div className="Header-controls">
      <HeaderControlsBtn name="List" path="/list" />
      <HeaderControlsBtn name="Category" path="/category" />
      <HeaderControlsBtn name="Sub category" path="/sub-category" />
    </div>
    <div className="Header-link-count">There are <span className="Header-link-count-num">999,999</span> Links in this site.</div>
  </div>
)

/**
 * 操作ボタン
 * @param {String} name 機能名称
 * @param {String} path 機能パス
 */
const HeaderControlsBtn = ({name, path}) => (
  <Link to={path} className="Header-controls-btn">
    {name}
  </Link>
)

export default Header
