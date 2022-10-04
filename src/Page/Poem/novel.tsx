import { Card, Col, Input, List, Nav, Row, Space } from '@douyinfe/semi-ui'
import Meta from '@douyinfe/semi-ui/lib/es/card/meta'
import { useState, useEffect } from 'react'
import store from './store'
import styles from './index.module.scss'
import { IconSearch } from '@douyinfe/semi-icons'
import { useParams } from 'react-router-dom'
interface IProps {}

const Novel = (props: IProps) => {
    const param: any = useParams()
    const [chapterList, setChapterList] = useState<any>()
    useEffect(() => {
       
    }, [])
    return (
        <div>
           <Card>
            
           </Card>
        </div>
    )
}
export default Novel
