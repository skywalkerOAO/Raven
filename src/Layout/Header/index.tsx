import React from 'react'
import styles from './index.module.scss'
import { Button } from '@douyinfe/semi-ui'
import { IconMinus, IconClose, IconBulb } from '@douyinfe/semi-icons'
interface IProps {}

interface IState {
  imgurl: string
  mode: string
}
let localStorage = window.localStorage
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

    const body = document.body
    if (!localStorage['pageMode']) {
      localStorage['pageMode'] = 'light'
    }
    if (localStorage['pageMode'] === 'dark') {
      body.setAttribute('theme-mode', 'dark')
    }
    if (localStorage['pageMode'] === 'light') {
      if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode')
      }
    }
  }
  switchMode = () => {
    const body = document.body
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode')
      localStorage['pageMode'] = 'light'
    } else {
      body.setAttribute('theme-mode', 'dark')
      localStorage['pageMode'] = 'dark'
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
