import { Nav } from '@douyinfe/semi-ui'
import { useState, useEffect } from 'react'
import {
  IconUser,
  IconFile,
  IconLayers,
  IconLive,
  IconFavoriteList,
  IconHorn,
  IconInbox,
} from '@douyinfe/semi-icons'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
const { _height } = require('../../gobalSettings')

const SiderBar = () => {
  const navigate = useNavigate()
  const [userInfo, setUserinfo] = useState<string>('请登录')
  useEffect(() => {}, [])
  return (
    <div>
      <Nav
        isCollapsed={true}
        defaultOpenKeys={['job']}
        bodyStyle={{ height: _height }}
        items={[
          { itemKey: 'me', text: '个人中心', icon: <IconUser /> },
          { itemKey: 'news', text: '新鲜事', icon: <IconHorn /> },
          { itemKey: 'pic', text: '无聊图', icon: <IconInbox /> },
          { itemKey: 'poem', text: '小说', icon: <IconFile /> },
          { itemKey: 'cartoon', text: '漫画', icon: <IconLayers /> },
          { itemKey: 'video', text: '动漫', icon: <IconLive /> },
          { itemKey: 'favorite', text: '收藏', icon: <IconFavoriteList /> },
        ]}
        onSelect={key => navigate(`/${key.itemKey}`)}
        header={{
          logo: <img src='http://cdn.jandan.net/wp-content/themes/egg/images/logo-2018.gif' />,
          text: userInfo,
        }}
      />
    </div>
  )
}
export default SiderBar
