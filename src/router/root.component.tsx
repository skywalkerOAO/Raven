import React from 'react'
import { Route, Routes } from 'react-router-dom'
import asyncComponent from './aysncComponent'
import Frame from '../layout/Frame'
// 主页面路由地址 使用异步路由
const Me = asyncComponent(() => import('../page/Me/index'))
const News = asyncComponent(() => import('../page/News/index'))
const Main = asyncComponent(() => import('../page/Main/index'))
const Poem = asyncComponent(() => import('../page/Poem/index'))
const Video = asyncComponent(() => import('../page/Video/index'))
const Favorite = asyncComponent(() => import('../page/Favorite/index'))
const Cartoon = asyncComponent(() => import('../page/Cartoon/index'))
const Pic = asyncComponent(() => import('../page/Pic/index'))
class RootComponent extends React.Component {
  render() {
    return (
      <Frame>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/me' element={<Me />} />
          <Route path='/news' element={<News />} />
          <Route path='/poem' element={<Poem/>} />
          <Route path='/video' element={<Video/>} />
          <Route path='/favorite' element={<Favorite/>} />
          <Route path='/cartoon' element={<Cartoon/>} />
          <Route path='/pic' element={<Pic/>} />
        </Routes>
      </Frame>
    )
  }
}

export default RootComponent
