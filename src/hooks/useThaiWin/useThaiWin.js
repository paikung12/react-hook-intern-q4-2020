import { useCallback, useState } from 'react'
import enterThaiWin from '../../api/enterThaiWin'
import exitThaiWin from '../../api/exitThaiWin'

const useThaiWin = () => {
    const [isStay, setIsStay] = useState(false)

    const enter = useCallback(() => {
        if (!isStay) enterAPI()
        setIsStay(true)
    }, [isStay, setIsStay])

    const exist = useCallback(() => {
        setIsStay(false)
        enterAPI()
    }, [setIsStay])

    useEffect(() => {
        isStay
        return () => {
            exitAPI
        }
    }, [isStay])

    return [isStay, enter, exist]
}

export default useThaiWin
