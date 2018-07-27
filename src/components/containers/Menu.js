import React from 'react'
import { IMG_PATH } from '../../constants/path'
import './Menu.css'

/**
 * メニューコンポーネント
 */
const Menu = ({menus}) => (
  <div className="Menu">
    {
      (menus != null) ?
        menus.map(m => {
          return <MenuElement name={m.label} code={m.code} key={'Menu-element-' + m.code} />
        }) : null
    }
  </div>
)

/**
 * メニュー要素
 * @param {String} name 名称
 * @param {String} code カテゴリコード
 */
const MenuElement = ({name, code}) => (
  <a className="Menu-element" href={'/list/' + code}>
    <img src={IMG_PATH + 'menu.png'} alt={name} />{name}
  </a>
)

export default Menu
