import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from './BookList'
import AddBook from './AddBook'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<BookList />} />
    <Route path="/addbook" element={<AddBook />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

