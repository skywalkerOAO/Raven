import { Card, Col, Input, Nav, Row, Space } from '@douyinfe/semi-ui'
import Meta from '@douyinfe/semi-ui/lib/es/card/meta'
import { useState, useEffect } from 'react'
import store from './store'
import styles from './index.module.scss'
import { IconSearch } from '@douyinfe/semi-icons'
interface IProps {}
const Search = (props: IProps) => {
    useEffect(() => {
        // (async function test() {
        //     await store.GetBook('盘龙')
        // })()
    }, [])
    return (
        <div className={styles.search_box}>
            <div className={styles.search_wrap}>
                <Input placeholder="请输入书名..." suffix={<IconSearch />} showClear></Input>
            </div>
        </div>
    )
}
export default Search
