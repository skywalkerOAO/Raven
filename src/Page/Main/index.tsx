import { Card, Button, Row, Col, List } from '@douyinfe/semi-ui'
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
    minWidth: 480
}
interface Iitem {
    rank: string
    content: string
    item: string
    key: string
    href: string
}
class Main extends React.Component<IProps, IState> {
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

    render() {
        return (
            <>
                <Row>
                    <Col span={12} className={styles.main_col}>
                        <Card title="weibo Hot" style={cardStl}>
                            <List dataSource={this.state.list} renderItem={(item: Iitem,i) => <List.Item key={i}>{item?.content}</List.Item>}></List>
                        </Card>
                    </Col>
                    <Col span={12} className={styles.main_col}>
                        <Card title="zhihu Hot" style={cardStl}>
                            <List dataSource={this.state.zhihu} renderItem={(item: Iitem,i) => <List.Item key={i}>{item?.content}</List.Item>}></List>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Main
