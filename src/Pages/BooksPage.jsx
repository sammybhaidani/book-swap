import { useEffect, useState } from "react"
import SingleBook from "../components/SingleBook";
import GenreFilter from "../components/GenreFilter";

export default function BooksPage({isClaimed}) {

    const [books, setBooks] = useState([])
    const [genres, setGenres] = useState([]);

    useEffect(() => {fetch(`https://book-swap-api.dev.io-academy.uk/api/books?claimed=${isClaimed}`)
    .then(res => res.json())
    .then(data => {
        setBooks(data.data);
    })},[isClaimed])

    useEffect(() => {fetch('https://book-swap-api.dev.io-academy.uk/api/genres')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    })

    return (
        <div className="p-3">

        <GenreFilter genres={genres}/>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {books.map(book => (
                <SingleBook key={book.id}
                img={book.image}
                title={book.title}
                author={book.author}
                genre={book.genre.name}
                id={book.id}/>
            ))}
            </div>
        </div>
    )
}