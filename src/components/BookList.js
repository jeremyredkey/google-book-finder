import React from 'react';


export default function BookList(props) {
    return (
        <div>
            <p>Results</p>
            {props.list.map(book => (
                <div>{book.title}</div>
            ))}
        </div>
    )
}