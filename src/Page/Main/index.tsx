import { Card, Button, Row, Col, List } from '@douyinfe/semi-ui'
import styles from './index.module.scss'
import React from 'react'
import store from './store'
interface IProps {
    keys: number
}

interface IState {}

class Main extends React.Component<IProps, IState> {
    state = {}

    async componentDidMount() {}

    render() {
        return <>
        <div className={styles.banner}>
           
        </div>
            </>
    }
}

export default Main
