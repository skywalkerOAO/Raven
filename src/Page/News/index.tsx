import { Card, Button, Row, Col, List, ButtonGroup } from '@douyinfe/semi-ui'
import styles from './index.module.scss'
import React from 'react'
import store from './store'
interface IProps {
    keys: number
}

interface IState {
    list: Array<any>
    zhihu: Array<any>
}
const cardStl = {
    minWidth: 460
}
interface Iitem {
    rank: string
    content: string
    item: string
    key: string
    href: string
}
class News extends React.Component<IProps, IState> {
    state = {
        list: [],
        zhihu: []
    }

    async componentDidMount() {
        await store.GetHot()
        this.setState(
            {
                list: store.WeiboHotList,
                zhihu: store.ZhihuHotList
            },
            () => {
                console.log(this.state.zhihu)
            }
        )
    }
    openUrl = (item:Iitem)=>{
      (window as any).ipcRenderer.send('open-url',`https://s.weibo.com/weibo?q=%23${item.content}%23&t=31&band_rank=${item.rank}&Refer=top`)
    }
    render() {
        return (
            <>
                <Row>
                    <Col span={12} className={styles.main_col}>
                        <Card title="微博热搜" style={cardStl}>
                            <List
                                dataSource={this.state.list}
                                renderItem={(item: Iitem, i) => (
                                    <List.Item
                                        onClick={ ()=>{this.openUrl(item)}}
                                        key={i}
                                        header={<>{item?.key ? item?.key.charAt(0) : <div>&#12288;</div>}</>}
                                        main={<>{item?.content}</>}
                                        extra={
                                           <>{item?.item}</>
                                        }
                                    ></List.Item>
                                )}
                            ></List>
                        </Card>
                    </Col>
                    <Col span={12} className={styles.main_col}>
                        <Card title="知乎排行榜" style={cardStl}>
                            <List dataSource={this.state.zhihu} renderItem={(item: Iitem, i) => <List.Item key={i}>{item?.content}</List.Item>}></List>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default News
