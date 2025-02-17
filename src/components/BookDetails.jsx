import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import H1 from "./atoms/H1";
import ClaimForm from "./ClaimForm";
import ReturnForm from "./ReturnForm";
import H2 from "./atoms/H2";
import BookReview from "./BookReview";

export default function BookDetails() {

    const {id} = useParams();

    const [bookData, setBookData] = useState([]);
    const [genre, setBookGenre] = useState('');
    const [person, setPerson] = useState('');
    const [bookReviews, setBookReviews] = useState([]);

    function handlePerson(name) {
        setPerson(name);
    }

    useEffect(() => {fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
    .then(res => res.json())
    .then(data => {
        setBookData(data.data);
        setBookGenre(data.data.genre.name);
        setPerson(data.data.claimed_by_name);
        setBookReviews(data.data.reviews);
        console.log(data.data.reviews);
    })}, [])

    return (
        <div className="flex flex-col gap-3 p-3 items-center mx-auto sm:flex-row sm:items-start sm:gap-5 sm:max-w-4xl">
            <div className="sm:basis-7xl">
                <img src={bookData.image} alt="" />
            </div>
            <div className="flex flex-col gap-3 items-center sm:items-start w-full px-5">
                <H1 text={bookData.title}/>
                <p>{bookData.author}</p>
                <p>{bookData.year}</p>
                <p>{bookData.page_count}</p>
                <p>{genre}</p>
                {person ? <p>{`Claimed by ${person}`}</p> 
                : <ClaimForm id={id} handlePerson={handlePerson}/>}
                {person && <ReturnForm id={id} name={person} handlePerson={handlePerson}/>}
                <p>{bookData.blurb}</p>
                <H2 text={"Reviews"}/>
                {bookReviews.map(review => (
                    <BookReview 
                    key={review.id}
                    name={review.name}
                    rating={review.rating}
                    review={review.review}/>
                ))}
            </div>
        </div>
    )
}