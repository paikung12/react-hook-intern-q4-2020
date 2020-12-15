import logo from './logo.svg'
import './App.css'
import { useRef } from 'react'

function App() {
    const firstCountRef = useRef(0)
    const onClick = () => {
        firstCountRef.current += 1
    }

    return (
        <div className="App">
            <p>First Count {firstCountRef.current} </p>
            <button onClick={onClick}> +</button>
        </div>
    )
}

export default App
