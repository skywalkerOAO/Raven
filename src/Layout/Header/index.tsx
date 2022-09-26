import React from 'react'
import styles from './index.module.scss'
import { Button } from '@douyinfe/semi-ui'
import { IconMinus, IconClose, IconBulb } from '@douyinfe/semi-icons'
interface IProps {}

interface IState {
  imgurl: string
  mode: string
}

class FormHeader extends React.PureComponent<IProps, IState> {
  state = {
    imgurl: '',
    mode: '暗',
  }
  componentDidMount() {
    const closebt = document.getElementById('closebt')
    const minbt = document.getElementById('minbt')
    minbt?.addEventListener('click', () => {
      ;(window as any).ipcRenderer.send('window-min')
    })
    closebt?.addEventListener('click', () => {
      ;(window as any).ipcRenderer.send('window-close')
    })
  }
  switchMode = () => {
    const body = document.body
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode')
      // 以下这行代码，window.setMode仅用于当通过本Demo切换时，通知Semi官网Header记录更新当前模式（只用于演示）。在您的代码里无需存在。
    } else {
      body.setAttribute('theme-mode', 'dark')
    }
  }
  render() {
    return (
      <div className={styles.winform}>
        <section>
          <Button id='closebt' className={styles.btn}>
            <IconClose />
          </Button>
          <Button id='minbt' className={styles.btn}>
            <IconMinus />
          </Button>
          <Button onClick={this.switchMode} className={styles.btn}>
            <IconBulb />
          </Button>
        </section>

        <div
          className={styles.topbar_logo_container}
          style={{ background: `url(${this.state.imgurl})` }}
        />
      </div>
    )
  }
}

export default FormHeader
