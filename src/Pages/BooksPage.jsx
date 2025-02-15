import { useEffect, useState } from "react"
import SingleBook from "../components/SingleBook";
import { Link } from "react-router-dom";

export default function BooksPage({isClaimed}) {

    const [books, setBooks] = useState([])

    useEffect(() => {fetch(`https://book-swap-api.dev.io-academy.uk/api/books?claimed=${isClaimed}`)
    .then(res => res.json())
    .then(data => {
        setBooks(data.data);
    })},[])


    return (
       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3">
        {books.map(book => (
            <SingleBook key={book.id}
            img={book.image}
            title={book.title}
            author={book.author}
            genre={book.genre.name}
            id={book.id}/>
        ))}
        </div>
       
    )
}