import React from "react";

function Search({ searchText, setSearchText }) {
    return (
        <>
            <div className="search">
                <h2>Search Books</h2>
                <div>
                    <input 
                        type="text"
                        placeholder="Search by book title..."
                        className="search-input"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                </div>
            </div>
        </>
    );
}
export default Search;