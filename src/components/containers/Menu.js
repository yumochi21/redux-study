import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { IMG_PATH } from '../../constants/path'
import './Menu.css'

/**
 * メニューコンテナ
 */
class Menu extends Component {
  componentDidMount() {
    this.props.actions.initCategory()
  }
  render() {
    const {menus, actions} = this.props
    return (
      <div className="Menu">
        {
          (menus != null) ?
            menus.map(m => {
              return <MenuElement name={m.label} code={m.code} key={'Menu-element-' + m.code} handleClick={() => actions.getLinkList(m.code)} />
            }) : null
        }
      </div>
    )
  }
}

/**
 * メニュー要素
 * @param {String} name 名称
 * @param {String} code カテゴリコード
 */
const MenuElement = ({name, code, handleClick}) => (
  <Link to={'/list/' + code} className="Menu-element" onClick={handleClick}>
    <img src={IMG_PATH + 'menu.png'} alt={name} />{name}
  </Link>
)

const mapState = (state, ownProps) => {
  return ({
   menus: state.category.categories
 })
}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(Menu)
