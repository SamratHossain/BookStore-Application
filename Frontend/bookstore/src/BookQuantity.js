import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookQuantity.css'
import Navbar from './Navbar';


const BookQuantity = (props) => {
  
  const { id } = useParams();
  console.log(id)
     
  const [data, setData] = useState([]);
  console.log(data)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/book/${id}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <>
    <Navbar />
    <h1>Add Your Quantity</h1>
    <div className="book-order">
      <div className="books-details">
        <img className="book-image" src={data.BookCover} alt="Book Cover" />
        <div className="book-info">
          <h2 className="book-title">{data.bookname}</h2>
          <p className="book-author">By {data.author}</p>
          <p className="book-price">Pice: {data.price}</p>
          <p className="book-isbn">ISBN: {data.isbn}</p>
        </div>
      </div>
      <div className="quantity-control">
        <button className="quantity-button" onClick={handleDecrement}>-</button>
        <input className="quantity-input" type="number" value={quantity} readOnly />
        <button className="quantity-button" onClick={handleIncrement}>+</button>
      </div>
      <button className='quantity-submit-button'>Add To Cart</button>
    </div>
    </>
  );
};

export default BookQuantity;
