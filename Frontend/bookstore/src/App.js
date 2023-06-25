import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './BookList'
import AddBook from './AddBook'
import BookQuantity from './BookQuantity'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<BookList />} />
    <Route path="/addbook" element={<AddBook />} />
    <Route path="/quantity/:id" element={<BookQuantity />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

