import { useState } from "react";
import BookCard from "./BookCard";
import Modal from "react-modal";
import useGoogleBooks from "../hooks/useGoogleBooks";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export default function BooksGrid({ query, bookLimit }) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const {books, error, isLoading} = useGoogleBooks(query, bookLimit)

    function closeModal() {
        setIsOpen(false);
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong...</p>;
    return (
        <main className="books__grid">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Publishers other books"
                ariaHideApp={false}
            >
                <div>
                    <h2>More books by this publisher</h2>
                    <ul>
                        <li>Book 1</li>
                        <li>Book 2</li>
                        <li>Book 3</li>
                    </ul>
                </div>
            </Modal>
            {books.map((book) => {
                return (
                    <BookCard
                        key={book.id}
                        title={book.volumeInfo.title}
                        imgUrl={book.volumeInfo}
                        setIsOpen={setIsOpen}
                    />
                );
            })}
        </main>
    );
}
