import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'

function App() {
  const random = Math.floor(Math.random() * quotes.length)

  const [index, setIndex] = useState(random)

  const colors = ['#104F55', '#32746D', '#9EC5AB', '#FAC9B8', '#EF476F', '#D3F2A3', '#97E196', '#6CC08B', '#4C9B82', '#217A79', '#105965', '#074050' ]
  
  const randomColor = Math.floor(Math.random() * colors.length)  
  
  const change = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setIndex(random)
  }
  
  

  return (
    <div style={{backgroundColor: `${colors[randomColor]}`}} className="App">

      <div className='quotebox'>
        
        <div className='message'>
          <i style={{color:`${colors[randomColor]}`}} class={`quote fa-solid fa-quote-left quote`}></i>
          <p style={{color:`${colors[randomColor]}`}}>{quotes[index].quote}</p>
        </div>

        <div className='author'>
          <p style={{color:`${colors[randomColor]}`}}>{quotes[index].author}</p>
          <button style={{backgroundColor: `${colors[randomColor]}`}} onClick={change}><i class="fa-solid fa-angle-right"></i></button>
        </div>

      </div>

    </div>
  )
}

export default App;