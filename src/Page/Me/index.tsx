import { Button, Card, Typography,Modal } from '@douyinfe/semi-ui'
import React from 'react'
import './index.scss'
interface IProps {
  // keys: number
}

interface IState {
  // key: number
}
const { Text } = Typography
class Me extends React.Component<IProps, IState> {
  state = {
    key: 0,
    visible:false
  }
  componentDidMount() {}
  showDialog = ()=>{
    this.setState({
      visible:true
    })
  }
  render() {
    return (
      <>
         <Button onClick={this.showDialog}>打开弹窗123</Button>
            <Modal
                title="123456"
                visible={this.state.visible}
                onOk={()=>{this.setState({visible:false})}}
                onCancel={()=>{this.setState({visible:false})}}
                closeOnEsc={true}
            >
                This is the content of a basic modal.
                <br />
                More content...
            </Modal>
      </>
    )
  }
}

export default Me
