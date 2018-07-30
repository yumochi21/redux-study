import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_PATH } from '../../constants/path'
import './List.css'

/**
 * リンクリストコンポーネント
 * @param {Array} links リンク配列
 */
const List = ({links, title, categoryCode, actions}) => (
  <div className="List">
    <ListTitle label={title} />
    <div className="List-box">
      {
        (links != null) ?
          links.map(l => {
            return <ListElement label={l.label} url={l.url} key={'Link-element-' + l.code} />
          }) : null
      }
    </div>
    <ListAddButton code={categoryCode} />
  </div>
)

/**
 * リンクリストのタイトル
 * @param {String} label タイトル
 */
const ListTitle = ({label}) => (
  <div className="List-title">{label}</div>
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
const ListAddButton = ({code}) => (
  <Link to={'/link/' + code} className="List-add-button">
    <img src={IMG_PATH + 'folder-add.png'} alt="リンク追加" />
  </Link>
)

export default List
