import { Card, Col, Nav, Row, Space } from '@douyinfe/semi-ui'
import Meta from '@douyinfe/semi-ui/lib/es/card/meta'
import { useState, useEffect } from 'react'
import store from './store'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

interface IProps {}
const HotNovel = (props: IProps) => {
    const jump = useNavigate()
    const [hotBook1, setHotBook1] = useState<Array<any>>([])
    const [hotBook2, setHotBook2] = useState<Array<any>>([])
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
            setHotBook1(arr1)
            setHotBook2(arr2)
        })()
    }, [])
    return (
        <div>
            <Row>
                <Col span={12} className={styles.NovelCol}>
                    <Space vertical>
                        {hotBook1.map((item: any, index: any, array: any) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        jump(`chapter/${item.Id}`, { replace: true })
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
                                    key={index}
                                    onClick={() => {
                                        jump(`chapter/${item.Id}`, { replace: true })
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
    )
}
export default HotNovel
