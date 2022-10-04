import { useParams } from 'react-router-dom'

export function WithRouter(Child: any) {
    return (props: any) => {
        const params = useParams()
        return <Child {...props} params={params} />
    }
}

export default WithRouter
