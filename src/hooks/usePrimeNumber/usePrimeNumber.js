import React, { useState, useEffect, useCallback } from 'react'

const usePrimeNumber = () => {
    const [isPrime, setIsPrime] = useState(false)

    const calPrime = (number) => {
        setNum(number)
    }
    const [num, setNum] = useState(0)

    useEffect(() => {
        if (num <= 1) {
            return setIsPrime(false)
        } else {
            for (var x = 2; x < num; x++) {
                if (num % x === 0) {
                    return setIsPrime(false)
                }
            }

            return setIsPrime(true)
        }
    }, [num])

    return [isPrime, calPrime, num]
}

export default usePrimeNumber
