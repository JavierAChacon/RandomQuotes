import quotes from '../quotes.json'

const Message = ({colors, randomColor, index}) => {
    return (
        <p style={{ color: `${colors[randomColor]}` }}>{quotes[index].quote}</p>
    )
}

export default Message;