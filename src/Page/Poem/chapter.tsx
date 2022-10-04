import { Card, Col, Input, List, Nav, Pagination, Row, Space } from '@douyinfe/semi-ui'
import Meta from '@douyinfe/semi-ui/lib/es/card/meta'
import { useState, useEffect } from 'react'
import store from './store'
import styles from './index.module.scss'
import { IconSearch } from '@douyinfe/semi-icons'
import { useParams } from 'react-router-dom'
interface IProps {}
interface INovel {
    id: number
    name: string
    hasContent: number
}
const Chapter = (props: IProps) => {
    const param: any = useParams()
    const [chapterList, setChapterList] = useState<any>()
    const [page, onPageChange] = useState<number>(1)
    useEffect(() => {
        ;(async function test() {
            let index = parseInt(param.id)
            let indexGroup = Math.ceil(index / 1000)
            await store.GetChapterList(indexGroup, index)
            setChapterList(store.ChapterList)
        })()
    }, [])

    function toNovel(v: INovel) {
        console.log(v)
    }
    function getData(data: any, page: number) {
        let start = (page - 1) * 20
        let end = page * 20
        return data?.slice(start, end)
    }
    return (
        <>
            <List
                bordered={true}
                header={'章节列表'}
                dataSource={getData(chapterList, page)}
                style={{ flexBasis: '100%', flexShrink: 0, borderBottom: '1px solid var(--semi-color-border)' }}
                className={styles['component-list-demo-booklist']}
                renderItem={item => (
                    <div
                        onClick={() => {
                            toNovel(item)
                        }}
                    >
                        <List.Item className={styles['list-item']}>{item.name}</List.Item>
                    </div>
                )}
            />
            <Pagination size="small" style={{ width: '100%', flexBasis: '100%', justifyContent: 'center' }} pageSize={20} total={chapterList?.length} currentPage={page} onChange={cPage => onPageChange(cPage)} />
        </>
    )
}
export default Chapter
