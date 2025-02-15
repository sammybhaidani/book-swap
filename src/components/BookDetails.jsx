import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import H1 from "./atoms/H1";

export default function BookDetails() {

    const {id} = useParams();

    const [bookData, setBookData] = useState([]);
    const [genre, setBookGenre] = useState('')

    useEffect(() => {fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setBookData(data.data);
        setBookGenre(data.data.genre.name);
    })}, [])

    return (
        <div className="flex flex-col gap-3 p-3 items-center sm:flex-row sm:items-start sm:gap-5">
            <div>
                <img src={bookData.image} alt="" />
            </div>
            <div className="flex flex-col gap-3 items-center sm:items-start">
                <H1 text={bookData.title}/>
                <p>{bookData.author}</p>
                <p>{bookData.year}</p>
                <p>{bookData.page_count}</p>
                <p>{genre}</p>
                <p>{bookData.blurb}</p>
            </div>
        </div>
    )
}