import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'

function App() {
  const random = Math.floor(Math.random() * quotes.length)

  const [index, setIndex] = useState(random)

  
  
  const change = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setIndex(random)
  }
  
  const colors = ['#BAF2E9', '#AFF8DD', '#B0FCC8', '#BFFEAD', '#D8FD8F', '#F9F871']
  
  const randomColor = Math.floor(Math.random() * colors.length)

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