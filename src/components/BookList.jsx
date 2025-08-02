import { Link } from 'react-router-dom';
import "./style.css";

function BookList({ booksData }) {
  return (
    <div className="bookList">
      {booksData.map((book) => (
        <Link key={book.id} to={`/book/${book.id}`}>
          <div className="book-card">
            <img
              className="book-cover"
              src={`https://picsum.photos/seed/${book.id}/200/150`}
              alt={book.title}
            />
            <div className="book-details">
              <h2 className="book-title">{book.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BookList;