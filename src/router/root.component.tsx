import React from 'react'
import { Route, Routes } from 'react-router-dom'
import asyncComponent from './aysncComponent'
import { FormHeader } from '../Layout'
import { Layout } from '@douyinfe/semi-ui'
import SiderBar from '../Layout/Siderbar'
import Styles from '../gobalSettings/frame.module.scss'
const { _width, _height } = require('../gobalSettings')
const { Sider, Content } = Layout
// 主页面路由地址 使用异步路由
const Me = asyncComponent(() => import('../Page/Me/index'))
const News = asyncComponent(() => import('../Page/News/index'))
const Main = asyncComponent(() => import('../Page/Main/index'))
class RootComponent extends React.Component {
  render() {
    return (
      <div style={{ width: _width, height: _height }}>
        <FormHeader />
        <Layout>
          <Sider>
            <SiderBar />
          </Sider>
          <Layout>
            <Content>
              <div className={Styles.frame} style={{ height: _height }}>
                {/* 右侧主界面路由 */}
                <Routes>
                  <Route path='/' element={<Main />} />
                  <Route path='/me' element={<Me />} />
                  <Route path='/news' element={<News />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default RootComponent
