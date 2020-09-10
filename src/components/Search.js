import React from 'react';

export default function Search() {
    return (
        <form>
            <input type="text" className="search-input" /><button>Search</button>
            <select className="print-type">
            <option value="">All</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            </select>
            <select className="book-filter">
            <option value="">No Filter</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            </select>
        </form>
    )
}