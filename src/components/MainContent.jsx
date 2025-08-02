import { useState, useEffect } from "react";
import Search from "./Search.jsx";
import BookList from "./BookList.jsx";

function MainContent() {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setBooks(data); // data is already an array of posts
    }
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Search searchText={searchText} setSearchText={setSearchText} />
      <BookList booksData={filteredBooks} />
    </>
  );
}

export default MainContent;
