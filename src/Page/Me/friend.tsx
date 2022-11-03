import { Card, Avatar, Space, Button, Typography, Skeleton } from '@douyinfe/semi-ui'
import Meta from '@douyinfe/semi-ui/lib/es/card/meta'
import React, { useEffect, useState } from 'react'

interface Iprops {
    loading: boolean
}
const { Title, Paragraph, Image } = Skeleton
const { Text } = Typography

function Friend(props: Iprops) {
    const [loading, setLoading] = useState<boolean>()
    useEffect(() => {
        console.log(props.loading)
    }, [])

    return (
        <div>
            <Card
                loading={props.loading}
                style={{ minWidth: 340 }}
                title={
                    <Skeleton style={{ width: 80 }} placeholder={<Title />} loading={loading}>
                        <Meta title="Semi Doc" description="全面、易用、优质" avatar={<Avatar alt="Card meta img" size="default" src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg" />} />
                    </Skeleton>
                }
                footerLine={true}
                footerStyle={{ display: 'flex', justifyContent: 'flex-end' }}
            >
                Semi Design 是由互娱社区前端团队与 UED 团队共同设计开发并维护的设计系统。
            </Card>
        </div>
    )
}

export default Friend
