import quotes from '../quotes.json'


const QuoteBox = () => {
    return(
    <div className="quotebox">
        <div className="message">
            <img src=""/>
            <p>{quotes[0].quote}</p>
        </div>

        <div className="author">
            <p>{quotes[0].author}</p>
            <button><i class="fi fi-rr-arrow-small-right"></i></button>
        </div>
    </div>
    )
}

export default QuoteBox;