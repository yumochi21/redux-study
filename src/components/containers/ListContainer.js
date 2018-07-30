import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import List from '../pages/List'

const TEST_CATEGORY = [
  {code: '001', label: 'Java'},
  {code: '002', label: 'CSS'},
  {code: '003', label: 'HTML'},
  {code: '004', label: 'C#'},
  {code: '005', label: '機会学習'},
  {code: '006', label: 'ビジネス'},
  {code: '007', label: 'サンプル'},
  {code: '008', label: 'テスト'}
]

/**
 * リストコンテナ
 */
class ListContainer extends Component {
  componentDidMount() {
    this.props.actions.getList(this.props.match.params.code)
  }
  render() {
    const {links, match} = this.props
    return (
      <div className="App">
        <Header />
        <Menu menus={TEST_CATEGORY} />
        <Content>
          <List links={links} title={match.params.code} categoryCode={match.params.code} />
        </Content>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return ({
   links: state.list.links,
   title: state.list.title
 })
}

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(ListContainer)
