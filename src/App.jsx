import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {
  
  const random = Math.floor(Math.random() * 20)
  
  return (
    <div className="App">
     <QuoteBox
     />
    </div>
  )
}

export default App
