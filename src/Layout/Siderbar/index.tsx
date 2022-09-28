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
  IconHome
} from '@douyinfe/semi-icons'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const SiderBar = () => {
  const navigate = useNavigate()
  const [userInfo, setUserinfo] = useState<string>('请登录')
  useEffect(() => {}, [])
  return (
    <div className={styles.bar}>
      <Nav
        isCollapsed={true}
        defaultOpenKeys={['job']}
        className={styles.bar}
        items={[
          { itemKey: '', text: '主页', icon: <IconHome /> },
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
          // eslint-disable-next-line jsx-a11y/alt-text
          logo: <img src='https://img.gameproto.com/2022/09/26/83087f5e062d9.jpg' />,
          text: userInfo,
        }}
      />
    </div>
  )
}
export default SiderBar
