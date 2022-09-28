import { Card, Button } from '@douyinfe/semi-ui'
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
  async componentDidMount() {

  }

  render() {
    return (
      <>
        <Card title='Semi Design' style={{ maxWidth: 360 }}>
          Semi Design 是由互娱社区前端团队与 UED
          团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
          Web 应用。
        </Card>
        <Card title='Semi Design' style={{ maxWidth: 360 }}>
          Semi Design 是由互娱社区前端团队与 UED
          团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
          Web 应用。
        </Card>
        <Card title='Semi Design' style={{ maxWidth: 360 }}>
          Semi Design 是由互娱社区前端团队与 UED
          团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
          Web 应用。
        </Card>
      </>
    )
  }
}

export default Main
