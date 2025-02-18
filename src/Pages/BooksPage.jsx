import { useEffect, useState } from "react"
import SingleBook from "../components/SingleBook";
import GenreFilter from "../components/GenreFilter";

export default function BooksPage({isClaimed}) {

    const [books, setBooks] = useState([])
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");

    useEffect(() => {fetch(`https://book-swap-api.dev.io-academy.uk/api/books?claimed=${isClaimed}${selectedGenre ? `&genre=${selectedGenre}` : ""}`)
    .then(res => res.json())
    .then(data => {
        setBooks(data.data);
    })},[isClaimed, selectedGenre])

    useEffect(() => {fetch('https://book-swap-api.dev.io-academy.uk/api/genres')
        .then(res => res.json())
        .then(data => {
            setGenres(data.data);
        })},[])

    function handleGenreChange(e) {
        setSelectedGenre(e.target.value);
    }

    return (
        <div className="p-3">

        <GenreFilter genres={genres} handleGenre={handleGenreChange}/>

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