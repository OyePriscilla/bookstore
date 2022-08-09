import React, { Component } from 'react';
import AddBook from './AddBook';
import Book from './Book';

export default class BookStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [
        {
          id: 1,
          title: 'Emotional Intelligence',
          author: 'Samuel Oyee',
        },
        {
          id: 2,
          title: 'Oil of Gladness',
          author: 'Daniel Great',
        },
        {
          id: 3,
          title: 'Unspeakable Joy',
          author: 'AdeOluwa Samuel',
        },
      ],
    };
  }

  render() {
    const { bookList } = this.state;
    return (
      <div>
        {bookList.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
        <AddBook />
      </div>
    );
  }
}
