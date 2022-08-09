import React from 'react';

export default class AddBook extends React.PureComponent {
  render() {
    return (
      <form className="addBook">
        <h3>Add your Book</h3>
        <div>
          <input type="text" className="title" placeholder="Book title" />
          <input type="text" className="author" placeholder="Book Author" />
          <button type="button">Add Book</button>
        </div>
      </form>
    );
  }
}
