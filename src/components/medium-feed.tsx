import type { BlogItem } from "../pages/api/trpc/[trpc]"

type MediumFeedProps = {
    className?: string
    data: BlogItem[]
}

const getDateString = (date: Date) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const day = months[date.getDay()]
    const month = date.getMonth()
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
}

const MediumFeed = ({ className, data } : MediumFeedProps) => {
    
    return (
        <div className={className}>
            <div className="space-y-2">
                <span>My recent blog posts:</span>
                { data
                ? <>
                    { data.map((item, k) => <p key={k}>&bull; <a href={item.link} className="hover:underline">{item.title} ({getDateString(item.date_posted)})</a></p>) }
                </>
                : <span>Loading...</span>
                }
            </div>
        </div>
    )
}

export default MediumFeed