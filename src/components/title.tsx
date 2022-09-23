type TitleProps = {
    text: String
}

const Title = ({ text } : TitleProps) => {
    return (
        <h1 className="text-blue-500 font-bold font-mono text-3xl">{ text }</h1>
    )
}

export default Title;