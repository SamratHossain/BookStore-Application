import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Booklist.css'
import Navbar from './Navbar';
import BookQuantity from './BookQuantity';

const DataDisplay = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Available Books</h1>
      
        <div className="book-list">
        {data.map((book, index) => (
        <Link className='book-link' to={`quantity/${book.id}`}>  
        <div className="book" key={index}>
          <img className="book-cover" src={book.BookCover} alt={book.bookname} />
          <div className="book-details">
            <h3>{book.bookname}</h3>
            <p>ISBN: {book.isbn}</p>
            <p>Author: {book.author}</p>
            <p>Price: ৳{book.price}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default DataDisplay;
