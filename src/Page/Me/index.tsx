import { Button, Card, Typography, Modal, Avatar, Row, Col, Space, Skeleton } from '@douyinfe/semi-ui'
import Meta from '@douyinfe/semi-ui/lib/es/card/meta'
import React from 'react'
import styles from './index.module.scss'
import Friend from './friend'
interface IProps {
    // keys: number
}

interface IState {
    signin: boolean
    user_name: string
    loading: boolean
}
const { Text } = Typography
const { Title, Paragraph, Image } = Skeleton
class Me extends React.Component<IProps, IState> {
    state = {
        signin: false,
        loading: true,
        user_name: '请登录'
    }
    componentDidMount() {}

    render() {
        return (
            <>
                <Space vertical style={{ width: '100%' }} spacing={'loose'}>
                    <Card title="个人信息" style={{ width: '100%' }}>
                        您还没有登录
                    </Card>
                    <Card title="个人动态" style={{ width: '100%' }} loading={this.state.loading}>
                        您还没有登录
                    </Card>
                    <Card title="朋友动态" style={{ width: '100%' }}>
                        <Row>
                            <Col span={8} className={styles.main_col}>
                                <Friend loading={this.state.loading} />
                            </Col>
                            <Col span={8} className={styles.main_col}>
                                <Friend loading={this.state.loading} />
                            </Col>
                            <Col span={8} className={styles.main_col}>
                                <Friend loading={this.state.loading} />
                            </Col>
                        </Row>
                    </Card>
                </Space>
            </>
        )
    }
}

export default Me
