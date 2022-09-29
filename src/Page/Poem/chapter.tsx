import { Button, Card, Typography, Space, Row, Col } from '@douyinfe/semi-ui'
import React from 'react'
import HotNovel from './hotNovel'
import styles from './index.module.scss'
import Search from './serch'
import store from './store'
interface IProps {
    // keys: number
}

interface IState {
    HotBook1: Array<any>
    HotBook2: Array<any>
}
const { Meta } = Card
class Chapter extends React.Component<IProps, IState> {
    state = {
        HotBook1: [],
        HotBook2: []
    }
    async componentDidMount() {
       

    }
    render() {
        return (
            <div>
              
            </div>
        )
    }
}

export default Chapter
