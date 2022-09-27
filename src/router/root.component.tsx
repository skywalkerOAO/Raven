import React from 'react'
import { Route, Routes } from 'react-router-dom'
import asyncComponent from './aysncComponent'
import Frame from '../Layout/Frame'
// 主页面路由地址 使用异步路由
const Me = asyncComponent(() => import('../Page/Me/index'))
const News = asyncComponent(() => import('../Page/News/index'))
const Main = asyncComponent(() => import('../Page/Main/index'))
const Poem = asyncComponent(() => import('../Page/Poem/index'))
const Video = asyncComponent(() => import('../Page/Video/index'))
const Favorite = asyncComponent(() => import('../Page/Favorite/index'))
const Cartoon = asyncComponent(() => import('../Page/Cartoon/index'))
const Pic = asyncComponent(() => import('../Page/Pic/index'))
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
