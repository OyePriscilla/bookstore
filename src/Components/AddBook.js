import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBooks } from '../redux/books/books';

const AddBook = () => {
  const [formValues, setFormValues] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  const onChangeBookDetails = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const OnAddBook = (e) => {
    e.preventDefault();
    if (!formValues.title.trim() || !formValues.author.trim()) return;
    const book = { id: uuidv4(), title: formValues.title, author: formValues.author };
    dispatch(addBooks(book));
    setFormValues({ title: '', author: '' });
  };
  return (
    <form className="addBook" onSubmit={OnAddBook}>
      <h3>Add your Book</h3>
      <div>
        <input name="title" value={formValues.title} onChange={onChangeBookDetails} type="text" className="title" placeholder="Book title" />
        <input name="author" value={formValues.author} onChange={onChangeBookDetails} type="text" className="author" placeholder="Book Author" />
        <button type="submit" style={{ cursor: 'pointer' }}>Add Book</button>
      </div>
    </form>
  );
};

export default AddBook;
