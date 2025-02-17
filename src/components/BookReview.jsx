export default function BookReview({name, rating, review}) {
    return (
        <div className="flex flex-col gap-2 mb-3">
            <p className="font-bold">{name}</p>
            <p>{`${rating}/5 stars`}</p>
            <p>{review}</p>
        </div>
    )
}