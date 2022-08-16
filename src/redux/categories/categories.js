// Actions
const CHECK = 'bookstore/books/CHECK';

// Reducer
export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';
    default: return state;
  }
}

// Action Creators
export function addBooks() {
  return { type: CHECK };
}
