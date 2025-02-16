import { Link } from "react-router-dom";
import H1 from "./atoms/H1";
import NavLink from "./NavLink";

export default function Nav() {
    return (
        <nav className="bg-cyan-950 text-white p-4 flex flex-col gap-3 items-center sm:flex-row  sm:justify-between">
            <div>
                <Link to={"/"}>
                    <H1 text={"Book Swap"}/>
                </Link>
            </div>
            <div className="flex gap-5 justify-center">
                <NavLink text={"Available books"} address={"/"}/>
                <NavLink text={"Claimed books"} address={"/claimed"}/>
            </div>
        </nav>
    )
}