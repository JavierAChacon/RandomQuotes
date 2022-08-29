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

  return (
    <div className="App">

      <div className='quotebox'>
        <div className='message'>
          <i class={`quote fa-solid fa-quote-left quote`}></i>
          <p>{quotes[index].quote}</p>
        </div>

        <div className='author'>
          <p>{quotes[index].author}</p>
          <button onClick={change}><i class="fa-solid fa-angle-right"></i></button>
        </div>

      </div>

    </div>
  )
}

export default App;