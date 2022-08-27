import { useState } from 'react'
import quotes from '../quotes.json'

const Random = () => {
    return (
        [number, setNumber] = useState(Math.floor(Math.random() * quotes.length))
    )
}

export default Random;
