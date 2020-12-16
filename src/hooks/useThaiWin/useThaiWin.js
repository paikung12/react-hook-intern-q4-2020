import { useCallback, useState } from 'react'
import enterThaiWin from '../../api/enterThaiWin'
import exitThaiWin from '../../api/exitThaiWin'

const useThaiWin = () => {
    const [isStay, setIsStay] = useState(false)

    const enter = () => {
        if (!isStay) {
            enterThaiWin()
            setIsStay(true)
        }
    }
    const exit = () => {
        exitThaiWin()
        setIsStay(false)
    }
    useEffect(() => {
        return () => {
            exitThaiWin()
        }
    }, [])

    return [isStay, enter, exist]
}

export default useThaiWin
