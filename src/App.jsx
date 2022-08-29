import './App.css'
import colors from './components/Colors'
import randomColor from './components/randomColor'
import QuoteBox from './components/QuoteBox'

function App() {
  
  return (
    <div style={{backgroundColor: `${colors[randomColor]}`}} className="App">

      <QuoteBox/>

    </div>
  )
}

export default App;