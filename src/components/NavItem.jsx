import { NavLink } from "react-router-dom";

export default function NavItem({text, address}) {
    return (
        <NavLink to={address} className={({isActive}) => isActive ? 'font-bold' : ''}>{text}</NavLink>
    )
}