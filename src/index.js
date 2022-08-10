import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Categories from './Pages/Categories';
import './index.css';
import App from './App';
import BookStore from './Components/BookStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
