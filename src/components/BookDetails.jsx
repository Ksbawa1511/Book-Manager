import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const dispatch = useDispatch();
    function handleAddBook(item) {
    dispatch(addItem(item));
    }
    function handleRemoveBook(item) {
        dispatch(removeItem(item));
    }

    useEffect(() => {
        async function fetchBook() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            setBook(data);
        }
        fetchBook();
    }, [id]);

    return (
        <>
            <h1>{`Book Details for the Book id ${id}`}</h1>
            {book ? (
                <div className="book-details-page" key={book.id}>
                    <img
                        className="book-details-image"
                        src={`https://picsum.photos/seed/${book.id}/400/250`}
                        alt={book.title}
                    />
                    <h2 className="book-details-title">{book.title}</h2>
                    <p className="book-details-body">{book.body}</p>
                    <p className="book-details-userid"><strong>User ID:</strong> {book.userId}</p>
                <button onClick={() => handleAddBook(book)}> Add to Cart </button>
                <button onClick={() => handleRemoveBook(book)}> 
                    Remove from Cart </button>
               
                </div>
            ) : (
                <p>Book not found.</p>
            )}
        </>
    );
}

export default BookDetails;