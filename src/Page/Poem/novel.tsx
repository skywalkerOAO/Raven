import { Button } from '@douyinfe/semi-ui'
import { useState, useEffect, useRef } from 'react'
import store from './store'
import styles from './index.module.scss'
import { IconArrowUp } from '@douyinfe/semi-icons'
import { useNavigate, useParams } from 'react-router-dom'

interface IProps {}

const Novel = (props: IProps) => {
    interface IChapter {
        bookname: string
        cname: string
        content: string
    }
    const [chapter, setChapter] = useState<IChapter>()
    const param: any = useParams()
    const jump = useNavigate()
    const chapterlist = store.ChapterList

    useEffect(() => {
        ;(async function getContent() {
            await store.GetContent(param.groupid, param.bookid, param.chapterid)
            setChapter(store.BookContent)
            for (let i = 0; i < chapterlist.length; i++) {
                if (chapterlist[i].id == param.chapterid) {
                    store.NowIndex = i
                }
            }
        })()
    }, [])

    function scrollToTop() {
        document.getElementById('novel_wrapper')?.scrollIntoView({ behavior: 'auto' })
    }
    async function next_Chapter() {
        console.log(chapterlist[store.NowIndex + 1])
        let id = chapterlist[store.NowIndex + 1].id
        store.NowIndex++
        await store.GetContent(param.groupid, param.bookid, id)
        jump(`/poem/chapter/novel/${param.groupid}/${param.bookid}/${id}`)
        scrollToTop()
    }

    return (
        <div id="novel_wrapper">
            <div className={styles.novel_title}>{chapter?.bookname}</div>
            <div className={styles.novel_chapter}>{chapter?.cname}</div>
            <div className={styles.novel_content}>{chapter?.content}</div>
            <Button onClick={next_Chapter}>next</Button>
        </div>
    )
}
export default Novel
