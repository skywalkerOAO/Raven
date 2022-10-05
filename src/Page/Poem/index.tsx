import { Button, Card, Typography, Space, Row, Col, Input } from '@douyinfe/semi-ui'
import { useEffect, useState } from 'react'
import { IconSearch } from '@douyinfe/semi-icons'
import styles from './index.module.scss'
import store from './store'
import { useNavigate } from 'react-router-dom'
import Meta from '@douyinfe/semi-ui/lib/es/card/meta'
interface IProps {
    // keys: number
}

interface IState {
    HotBook1: Array<any>
    HotBook2: Array<any>
}
const Poem = (props: IProps) => {
    const jump = useNavigate()
    const [value, SetValue] = useState<string>('')
    const [bookList, SetBookList] = useState<any>([])
    const [hotBook1, SetHotBook1] = useState<Array<any>>([])
    const [hotBook2, SetHotBook2] = useState<Array<any>>([])
    async function search() {
        await store.GetBook(value)
        SetBookList(store.SearchList)
        let arr1 = []
        let arr2 = []
        for (let i = 0; i < 5; i++) {
            arr1.push(store.SearchList[i])
        }
        for (let i = 5; i < 10; i++) {
            arr2.push(store.SearchList[i])
        }
        SetHotBook1(arr1)
        SetHotBook2(arr2)
    }
    function getValue(v: string) {
        SetValue(v)
        console.log(v)
    }

    useEffect(() => {
        ;(async function fetchData() {
            await store.GetHot()
            let arr1 = []
            let arr2 = []
            for (let i = 0; i < 5; i++) {
                arr1.push(store.HotBookList[i])
            }
            for (let i = 5; i < 10; i++) {
                arr2.push(store.HotBookList[i])
            }
            SetHotBook1(arr1)
            SetHotBook2(arr2)
        })()
    }, [])

    return (
        <div>
            <div className={styles.search_box}>
                <div className={styles.search_wrap}>
                    <Input
                        placeholder="请输入书名..."
                        suffix={
                            <Button onClick={search}>
                                <IconSearch />
                            </Button>
                        }
                        showClear
                        onChange={v => {
                            getValue(v)
                        }}
                        onEnterPress={search}
                    ></Input>
                </div>
            </div>
            <div>
                <Row>
                    <Col span={12} className={styles.NovelCol}>
                        <Space vertical>
                            {hotBook1.map((item: any, index: any, array: any) => {
                                return (
                                    <div
                                        className={styles.card_warp}
                                        key={index}
                                        onClick={() => {
                                            jump(`/poem/chapter/${item.Id}`)
                                        }}
                                    >
                                        <Card shadows="hover" className={styles.card_box} bordered={false} headerLine={true} title={<Meta title={item.Name} description={item.Author} />} headerExtraContent={<span>{item.CName}</span>}>
                                            {item.Desc.slice(0, 80) + '...'}
                                        </Card>
                                    </div>
                                )
                            })}
                        </Space>
                    </Col>
                    <Col span={12} className={styles.NovelCol}>
                        <Space vertical>
                            {hotBook2.map((item: any, index: any, array: any) => {
                                return (
                                    <div
                                        className={styles.card_warp}
                                        key={index}
                                        onClick={() => {
                                            jump(`/poem/chapter/${item.Id}`)
                                        }}
                                    >
                                        <Card shadows="hover" className={styles.card_box} bordered={false} headerLine={true} title={<Meta title={item.Name} description={item.Author} />} headerExtraContent={<span>{item.CName}</span>}>
                                            {item.Desc.slice(0, 80) + '...'}
                                        </Card>
                                    </div>
                                )
                            })}
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Poem
