import { Link } from "react-router-dom";

export default function NavLink({text, address}) {
    return (
        <Link to={address}>{text}</Link>
    )
}