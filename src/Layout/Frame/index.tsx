import React from 'react'
import { WinHeader } from '../../Layout'
import { Layout } from '@douyinfe/semi-ui'
import SiderBar from '../../Layout/Siderbar'
import Styles from './frame.module.scss'
import Semi from './semi.module.scss'
const { Sider, Content, Header } = Layout

interface IProps {
  children: any
}

interface IState {
  height: number
}
class Frame extends React.Component<IProps, IState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div className={Semi.main_frame}>
        <Layout className={Semi.semi_layout1}>
         <Header><WinHeader /></Header>
          <Layout className={Semi.semi_layout2}>
            <Sider><SiderBar /></Sider>
            <Content>
              <div className={Styles.frame} >
                <div className={Styles.wrapper}>{this.props.children}</div>
              </div>
            </Content>
          
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Frame
