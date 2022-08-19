import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/configureStore';
import Categories from './Pages/Categories';
import './index.css';
import App from './App';
import BookStore from './Components/BookStore';
import { loadBooks } from './redux/books/books';

store.dispatch(loadBooks());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<BookStore />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
