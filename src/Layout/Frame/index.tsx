import React, { PureComponent, ReactNode } from 'react'
import WinHeader from '../Header'
import { Layout } from '@douyinfe/semi-ui'
import SiderBar from '../Siderbar'
import Styles from './frame.module.scss'
import Semi from './semi.module.scss'
const { Sider, Content, Header } = Layout

interface IProps {
    children: ReactNode
}

interface IState {}
class Frame extends PureComponent<IProps, IState> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className={Semi.main_frame}>
                <Layout className={Semi.semi_layout1}>
                    <Header>
                        <WinHeader />
                    </Header>
                    <Layout className={Semi.semi_layout2}>
                        <Sider>
                            <SiderBar />
                        </Sider>
                        <Content>
                            <div className={Styles.frame} >
                                <div className={Styles.wrapper} id="content_wrapper">
                                    {this.props.children}
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Frame
