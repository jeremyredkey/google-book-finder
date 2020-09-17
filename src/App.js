import React from 'react';
import './App.css';
import BookList from './components/BookList';
import Search from './components/Search';

// Google Books API Key: AIzaSyC2IrffVIMj4Rjj3lYp2aQtZR3YhIDdtSE

//https://www.googleapis.com/auth/books

//https://www.googleapis.com/books/v1/volumes?q=search+terms

// Example GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

class App extends React.Component {
  state = { 
    bookList: []
  }

  search = (e) => { 
    const userInput = e.target.userInput.value
    const printType = e.target.printType.value
    const bookFilter = e.target.bookFilter.value

    e.preventDefault();

    let params = {
      q: userInput,
      key: 'AIzaSyC2IrffVIMj4Rjj3lYp2aQtZR3YhIDdtSE',
      printType: printType
  };
  if (bookFilter) {
    params.filter = bookFilter;
  }
  var esc = encodeURIComponent;
  var query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    fetch(`https://www.googleapis.com/books/v1/volumes?` + query)
    .then(response => response.json())
    .then(data => this.setState({bookList : data.items}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <main>
          <Search search = {this.search} />
          <BookList list={this.state.bookList} />
        </main>
      </div>
    );
  }
}

export default App;
