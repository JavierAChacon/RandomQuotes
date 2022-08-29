import { useState } from 'react'
import './App.css'
import quotes from './quotes.json'
import colors from './components/Colors'
import Quote from './components/Quote'
import Message from './components/Message'
import Author from './components/Author'
import Button from './components/Button'

function App() {

  const random = Math.floor(Math.random() * quotes.length)

  const randomColor = Math.floor(Math.random() * colors.length)

  const [index, setIndex] = useState(random)

  const change = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setIndex(random)
  }



  return (
    <div style={{ backgroundColor: `${colors[randomColor]}` }} className="App">

      <div className='quotebox'>

        <div className='message'>
          <Quote
          colors = {colors}
          randomColor = {randomColor}
          />
          <Message
          colors = {colors}
          randomColor= {randomColor}
          index = {index}
          />
        </div>

        <div className='author'>
          <Author
          colors = {colors}
          randomColor= {randomColor}
          index = {index}
          />
          <button style={{ backgroundColor: `${colors[randomColor]}` }} onClick={change}><Button/></button>
        </div>

      </div>

    </div>
  )
}

export default App;