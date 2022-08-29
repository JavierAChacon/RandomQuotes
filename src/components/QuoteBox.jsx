import { useState } from "react"
import colors from "./Colors"
import randomColor from "./randomColor"
import quotes from '../quotes.json'
import random from "./Random"

const QuoteBox = () => {

    const [index, setIndex] = useState(random)

    const change = () => {

        const random = Math.floor(Math.random() * quotes.length)

        setIndex(random)
    }


    return (
       
       <div className='quotebox'>

            <div className='message'>
                <i style={{ color: `${colors[randomColor]}` }} class={`quote fa-solid fa-quote-left quote`}></i>
                <p style={{ color: `${colors[randomColor]}` }}>{quotes[index].quote}</p>
            </div>

            <div className='author'>
                <p style={{ color: `${colors[randomColor]}` }}>{quotes[index].author}</p>
                <button style={{ backgroundColor: `${colors[randomColor]}` }} onClick={change}><i class="fa-solid fa-angle-right"></i></button>
            </div>

        </div>
    
    )
}

export default QuoteBox;