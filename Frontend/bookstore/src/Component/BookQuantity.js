import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../CSS/BookQuantity.css'
import Navbar from './Navbar';


const BookQuantity = (props) => {
  
  const { id } = useParams();
  let navigate = useNavigate();
     
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Retrieve cart data from local storage
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleAddToCart = () => {
    const newItem = {
      bookId: data.id,
      bookName: data.bookname,
      isbn: data.isbn,
      author: data.author,
      price: data.price,
      image: data.BookCover,
      quantity: quantity
    };


    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
    

    // Save the updated cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    navigate('/mycart');
  };



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
          <p className="book-price">Pice: ৳{data.price}</p>
          <p className="book-isbn">ISBN: {data.isbn}</p>
        </div>
      </div>
      <div className="quantity-control">
        <button className="quantity-button" onClick={handleDecrement}>-</button>
        <input className="quantity-input" type="number" value={quantity} readOnly />
        <button className="quantity-button" onClick={handleIncrement}>+</button>
      </div>
      <button className='quantity-submit-button' onClick={handleAddToCart}>Add To Cart</button>
    </div>
    </>
  );
};

export default BookQuantity;
