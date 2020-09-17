import React from 'react';
import "./BookList.css";


export default function BookList(props) {
    return (
        <div id="book-container">
            <p>Results</p>
            {props.list.map(book => (
                <div id="book-results" key={book.id}>
                    <h3>{book.volumeInfo.title}</h3>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-thumbnail"/>
                    <a href={book.volumeInfo.infoLink} target="_blank">Click here for more details</a>
                </div>
            ))}
        </div>
    )
}