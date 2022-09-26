import { Button } from '@douyinfe/semi-ui'
import React from 'react'
interface IProps {
  keys: number
}

interface IState {
  key: number
}

class Main extends React.Component<IProps, IState> {
  state = {
    key: 0,
  }
  componentDidMount() {}

  render() {
    return <>main</>
  }
}

export default Main
