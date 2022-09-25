import { Nav } from '@douyinfe/semi-ui'
import { useState, useEffect } from 'react'
import { IconUser, IconStar, IconSetting } from '@douyinfe/semi-icons';
import styles from './index.module.scss'

const { _height } = require('../../gobalSettngs')
const SiderBar = () => {
    useEffect(() => {
    }, [])
    return (
        <>
            <Nav
                className={styles.container}
                bodyStyle={{ height: _height }}
                items={[
                    { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
                    { itemKey: 'union', text: '活动管理', icon: <IconStar /> },
                    {
                        text: '任务平台',
                        icon: <IconSetting />,
                        itemKey: 'job',
                        items: ['任务管理', '用户任务查询'],
                    },
                ]}
                onSelect={data => console.log('trigger onSelect: ', data)}
                onClick={data => console.log('trigger onClick: ', data)}
            />
        </>
    )
}
export default SiderBar
