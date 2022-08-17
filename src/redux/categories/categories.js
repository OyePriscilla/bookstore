// Actions
const CHECK = 'bookstore/books/CHECK';

// Reducer
export default (state = [], action = {}) => {
  switch (action.type) {
    case CHECK:
      return 'Under Construction';
    default: return state;
  }
};

// Action Creators
export function checkBookStatus() {
  return { type: CHECK };
}
