import "./style.css";
function Book(props) {
    return (
        <>
            <div className="book-card">
                <img src={props.bookDetails.cover} alt={props.bookDetails.title}
                    height="200"
                    width="200"
                    className="book-cover"
                />
                <div className="book-details">
                    <h2 className="book-title">{props.bookDetails.title}</h2>
                    <p className="book-author">{props.bookDetails.author}</p>
                </div>
            </div>
        </>
    );
}
export default Book;