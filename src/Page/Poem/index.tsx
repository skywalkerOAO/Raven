import { Button, Card, Typography, Modal } from '@douyinfe/semi-ui'
import React from 'react'
import './index.scss'
import store from './store'
interface IProps {
    // keys: number
}

interface IState {
    HotBook: Array<any>
}
const { Meta } = Card
class Poem extends React.Component<IProps, IState> {
    state = {
        HotBook: []
    }
    async componentDidMount() {
        await store.GetHot()
        this.setState(
            {
                HotBook: store.HotBookList
            },
            () => {
                console.log(this.state.HotBook)
            }
        )
    }

    render() {
        return (
            <>
                {store.HotBookList.map((item: any, index: any, array: any) => {
                    return (
                        <Card style={{ maxWidth: 360 }} bordered={false} headerLine={true} title={<Meta title={item.Name} description={item.Author} />} headerExtraContent={<span>{item.CName}</span>}>
                            {item.Desc}
                        </Card>
                    )
                })}
            </>
        )
    }
}

export default Poem
