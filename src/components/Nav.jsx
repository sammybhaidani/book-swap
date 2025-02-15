import { Link } from "react-router-dom";
import H1 from "./atoms/H1";

export default function Nav() {
    return (
        <nav className="bg-cyan-950 text-white p-4 flex justify-center sm:justify-start">
            <Link to={"/"}>
            <H1 text={"Book Swap"}/>
            </Link>
        </nav>
    )
}