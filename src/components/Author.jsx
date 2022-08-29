import quotes from '../quotes.json'

const Author = ({colors, randomColor, index}) => {
    return (

        <p style={{ color: `${colors[randomColor]}` }}>{quotes[index].author}</p>

    )
}

export default Author;