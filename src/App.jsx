import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import BooksPage from "./Pages/BooksPage";
import BookDetails from "./components/BookDetails";

export default function App() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<BooksPage isClaimed={0}/>}/>
                <Route path="/claimed" element={<BooksPage isClaimed={1}/>}/>
                <Route path="/books/:id" element={<BookDetails/>} />
            </Routes>
        </BrowserRouter>
        
    )
}