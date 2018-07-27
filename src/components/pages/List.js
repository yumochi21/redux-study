import React from 'react'
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

export default List
