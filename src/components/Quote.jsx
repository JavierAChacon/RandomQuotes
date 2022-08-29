const Quote = ({colors, randomColor}) => {
    return(
        <i style={{ color: `${colors[randomColor]}` }} class={`quote fa-solid fa-quote-left quote`}></i>
    )
}

export default Quote;