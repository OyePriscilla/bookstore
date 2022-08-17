import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  {
    id: uuidv4(),
    title: 'The unshakable King',
    author: 'Jeremiah Great',
  },
  {
    id: uuidv4(),
    title: 'The Joy of a Winner',
    author: 'Daniel Great',
  },
  {
    id: uuidv4(),
    title: 'Emotional Stability',
    author: 'Andrew Joys',
  },
];

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

// Action Creators
export function addBooks(book) {
  return { type: ADD, book };
}

export const removeBooks = (id) => ({ type: REMOVE, id });
