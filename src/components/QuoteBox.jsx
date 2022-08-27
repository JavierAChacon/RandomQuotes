import quotes from '../quotes.json'
import random from './Random'

const QuoteBox = () => {
    
    return(
    <div className="quotebox">
        <div className="message">
            <img src=""/>
            <p>{quotes[random].quote}</p>
        </div>

        <div className="author">
            <p>Arroz</p>
            <button><img src=""/></button>
        </div>
    </div>
    )
}

export default QuoteBox;