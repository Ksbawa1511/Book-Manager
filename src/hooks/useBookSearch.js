import { useState, useEffect } from 'react';
import { Books } from '../utils/mockData.js';

export function useBookSearch() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  // Filter books whenever searchText changes
  useEffect(() => {
    const filterBooks = Books.filter(book =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(filterBooks);
  }, [searchText]);

  return {
    searchText,
    setSearchText,
    filteredBooks
  };
} 