import Nav from "./components/Nav";
import BooksPage from "./Pages/BooksPage";

export default function App() {
    return (
        <>
        <Nav/>
        <BooksPage isClaimed={0}/>
        </>
    )
}