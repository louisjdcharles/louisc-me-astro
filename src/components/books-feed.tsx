type BooksFeedProps = {
    className?: string,
    data: String[]
}

const BooksFeed = ({ className, data } : BooksFeedProps) => {

    return (
        <div className={className}>
            <div className="space-y-2">
                <span>I am currently reading:</span>
                { data
                ? <>
                    { data.map((item, k) => <p key={k}>&bull; {item}</p>) }
                </>
                : <span>Loading...</span>
                }
            </div>
        </div>
    )
}

export default BooksFeed