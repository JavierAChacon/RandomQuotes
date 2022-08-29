import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'
import colors from './components/Colors'
import random from './components/Random'
import randomColor from './components/randomColor'

function App() {
  
  const [index, setIndex] = useState(random)
  
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