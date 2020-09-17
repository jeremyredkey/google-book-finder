import React from 'react';

export default function Search(props) {
    return (
        <form onSubmit = {props.search}>
            <input type="text" name="userInput" className="search-input" /><button>Search</button>
            <select className="print-type" name="printType">
            <option value="all">All</option>
            <option value="books">books</option>
            <option value="magazines">magazines</option>
            </select>
            <select className="book-filter" name="bookFilter">
            <option value="">No Filter</option>
            <option value="partial">partial</option>
            <option value="full">full</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="paid-ebooks">paid-ebooks</option>
            <option value="ebooks">ebooks</option>
            </select>
        </form>
    )
}