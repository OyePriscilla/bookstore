// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}

// Action Creators
export function addBooks(book) {
  return { type: ADD, book };
}

export function removeBooks(id) {
  return { type: REMOVE, id };
}
