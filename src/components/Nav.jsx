import H1 from "./atoms/H1";

export default function Nav() {
    return (
        <nav className="bg-cyan-950 text-white p-4 flex justify-center sm:justify-start">
            <H1 text={"Book Swap"}/>
        </nav>
    )
}