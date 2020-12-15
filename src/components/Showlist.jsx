import { useEffect } from 'react'

const ShowCounter = ({ count }) => {
    useEffect(() => {
        console.log('count-effect')
    }, [count])
    return <div>count is {count}</div>
}
export default Counter
