import "./App.css";
import BooksGrid from "./components/BooksGrid";
import Header from "./components/Header";
import QueryBar from "./components/QueryBar";
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("quilting");
    const [bookLimit, setBookLimit] = useState(10)
    return (
        <div className="App">
            <Header title="Book Store" />
            <QueryBar setQuery={setQuery} setBookLimit={setBookLimit} />
            <BooksGrid query={query} bookLimit={bookLimit} />
        </div>
    );
}

export default App;
