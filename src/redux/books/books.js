import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const LOAD = 'bookstore/books/LOAD';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case `${ADD}/fulfilled`:
      return [...state, action.payload.book];
    case `${REMOVE}/fulfilled`:
      return state.filter((book) => book.id !== action.payload.id);
    case `${LOAD}/fulfilled`:
      return action.payload.books;
    default: return state;
  }
};

const convertToBookArray = (axiosdata) => Object.entries(axiosdata).map((item) => ({
  id: item[0],
  ...item[1][0],
})) || [];

// Action Creators
export const addBooks = createAsyncThunk(ADD, async ({ id, title, author }) => {
  await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Wu0VJb3QoJgnAw5ST5nJ/books', {
    item_id: id,
    author,
    title,
    category: 'null',
  });
  return {
    book: {
      id,
      title,
      author,
      category: 'null',
    },
  };
});

export const loadBooks = createAsyncThunk(LOAD, async () => {
  const res = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Wu0VJb3QoJgnAw5ST5nJ/books');
  return { books: convertToBookArray(res.data) };
});

export const removeBooks = createAsyncThunk(REMOVE, async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Wu0VJb3QoJgnAw5ST5nJ/books/${id}`);
  return { id };
});
