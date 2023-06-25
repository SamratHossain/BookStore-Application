import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './Component/BookList'
import AddBook from './Component/AddBook'
import BookQuantity from './Component/BookQuantity'
import MyCart from './Component/MyCart'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<BookList />} />
    <Route path="/addbook" element={<AddBook />} />
    <Route path="/quantity/:id" element={<BookQuantity />} />
    <Route path="/mycart" element={<MyCart />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

