import React from 'react'
import { IMG_PATH } from '../../constants/path'
import './List.css'

/**
 * リンクリストコンポーネント
 * @param {Array} links リンク配列
 */
const List = ({links}) => (
  <div className="List">
    {
      (links != null) ?
        links.map(l => {
          return <ListElement label={l.label} url={l.url} key={'Link-element-' + l.code} />
        }) : null
    }
    <ListAddButton />
  </div>
)

/**
 * リンク
 * @param {String} label ラベル
 * @param {String} url   URL
 */
const ListElement = ({label, url}) => (
  <a className="List-link" href={url} target="_blank">
    {label}
  </a>
)

/**
 * リンク追加ボタン
 */
const ListAddButton = () => (
  <a className="List-add-button" href="#">
    <img src={IMG_PATH + 'folder-add.png'} alt="リンク追加" />
  </a>
)

export default List
