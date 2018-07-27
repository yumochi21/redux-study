import React, { Component } from 'react';
import Header from './containers/Header'
import Menu from './containers/Menu'
import Content from './containers/Content'
import List from './pages/List'
import './App.css';

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

const TEST_LINK = [
  {code: '001', label: 'テストリンクテストリンクテストリンクテストリンクテストリンクテストリンクテストリンクテストリンクテストリンクテストリンクテストリンクテストリンク', url: 'https://google.com'},
  {code: '002', label: 'テストリンク', url: 'https://google.com'},
  {code: '003', label: 'テストリンク', url: 'https://google.com'},
  {code: '004', label: 'テストリンク', url: 'https://google.com'},
  {code: '005', label: 'テストリンク', url: 'https://google.com'},
  {code: '006', label: 'テストリンク', url: 'https://google.com'},
  {code: '007', label: 'テストリンク', url: 'https://google.com'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu menus={TEST_CATEGORY} />
        <Content>
          <List links={TEST_LINK} />
        </Content>
      </div>
    );
  }
}

export default App;
