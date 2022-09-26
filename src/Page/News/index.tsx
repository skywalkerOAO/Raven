import React from 'react'
interface IProps {
  keys: number
}

interface IState {
  key:number
}

class News extends React.Component<IProps, IState> {
  state = {
    key:0
  }
  componentDidMount() {}
  UNSAFE_componentWillReceiveProps(nextProps: any, nextContext: any): void {
    let key = nextProps.match.params.key
    this.setState({
      key:key
    })
  }
  render() {
    return <>news</>
  }
}

export default News
