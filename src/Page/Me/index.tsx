import { Button } from '@douyinfe/semi-ui'
import React from 'react'
import './index.scss'
interface IProps {
  // keys: number
}

interface IState {
  // key: number
}

class Me extends React.Component<IProps, IState> {
  state = {
    key: 0,
  }
  componentDidMount() {}

  render() {
    return <>me</>
  }
}

export default Me
