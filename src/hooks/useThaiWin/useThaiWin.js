import { useCallback, useState, useEffect } from 'react'
import enterThaiWin from '../../api/enterThaiWin'
import exitThaiWin from '../../api/exitThaiWin'

const useThaiWin = () => {
    const [isStay, setIsStay] = useState(false)

    const enter = useCallback(() => {
        if (!isStay) enterThaiWin()
        setIsStay(true)
    }, [isStay, setIsStay])

    const exist = useCallback(() => {
        setIsStay(false)
        exitThaiWin()
    }, [setIsStay])

    useEffect(() => {
        return () => {
            exitThaiWin()
        }
    }, [])

    return [isStay, enter, exist]
}

export default useThaiWin
