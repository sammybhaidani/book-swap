export default function BookReview({name, rating, review}) {
    return (
        <div className="flex flex-col gap-4">
            <p>{name}</p>
            <p>{rating}</p>
            <p>{review}</p>
        </div>
    )
}