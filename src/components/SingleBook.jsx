import { Link } from "react-router-dom";
import H3 from "./atoms/H3";

export default function SingleBook({img, title, author, genre, id}) {
    return (
        <Link to={`/books/${id}`}>
        <div className="flex flex-col gap-3 border p-3 items-center">
            <img src={img} alt="" />
            <H3 text={title}/>
            <p>{author}</p>
            <p>{genre}</p>
        </div>
        </Link>
    )
}