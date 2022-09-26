import React from 'react'
import { Route, Routes } from 'react-router-dom'
import asyncComponent from './aysncComponent'
import { FormHeader } from '../Layout'
import styles from '../gobalSettings/gobal.module.scss'
import '../gobalSettings/reset.scss'
import { Layout } from '@douyinfe/semi-ui'
import SiderBar from '../Layout/Siderbar'
const { _width, _height } = require('../gobalSettings')
const { Sider, Content } = Layout
// 主页面路由地址 使用异步路由
const Me = asyncComponent(() => import('../Page/Me/index'))
const News = asyncComponent(() => import('../Page/News/index'))

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
              <div className={styles.child_winform}>
                {/* 右侧主界面路由 */}
                <Routes>
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
