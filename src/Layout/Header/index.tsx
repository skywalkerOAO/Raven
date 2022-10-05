import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Button } from '@douyinfe/semi-ui'
import { IconMinus, IconClose, IconBulb, IconMaximize, IconChevronRight, IconChevronLeft } from '@douyinfe/semi-icons'
import { useNavigate } from 'react-router-dom'
import { sessionGet } from '../../utils/session'
interface IProps {}

let localStorage = window.localStorage
const FormHeader = (props: IProps) => {
    const navigate = useNavigate()

    useEffect(() => {
        const closebt = document.getElementById('closebt')
        const minbt = document.getElementById('minbt')
        const maxbt = document.getElementById('maxbt')
        minbt?.addEventListener('click', () => {
            ;(window as any).ipcRenderer.send('window-min')
        })
        maxbt?.addEventListener('click', () => {
            ;(window as any).ipcRenderer.send('window-max')
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
    }, [])

    function switchMode() {
        const body = document.body
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode')
            localStorage['pageMode'] = 'light'
        } else {
            body.setAttribute('theme-mode', 'dark')
            localStorage['pageMode'] = 'dark'
        }
    }
    return (
        <div className={styles.winform}>
            <section>
                <Button
                    id="back"
                    onClick={() => {
                        navigate(-1)
                        console.log(window.history)
                    }}
                    className={styles.navBtn}
                >
                    <IconChevronLeft />
                </Button>
                <Button
                    id="push"
                    onClick={() => {
                        navigate(+1)
                        console.log(window.history)
                    }}
                    className={styles.navBtn}
                >
                    <IconChevronRight />
                </Button>
            </section>
            <section>
                <Button id="closebt" className={styles.btn}>
                    <IconClose />
                </Button>
                <Button id="maxbt" className={styles.btn}>
                    <IconMaximize />
                </Button>
                <Button id="minbt" className={styles.btn}>
                    <IconMinus />
                </Button>
                <Button onClick={switchMode} className={styles.btn}>
                    <IconBulb />
                </Button>
            </section>
        </div>
    )
}

export default FormHeader
