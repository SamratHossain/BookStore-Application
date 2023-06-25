import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './MyCart.css'

const CartItem = () => {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  console.log("local data: ",data)
  console.log("total price:", totalPrice)
  console.log("total quantity:", totalQuantity)


  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('cartItems');

    if (storedData) {
      // Parse the stored data
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
    
  }, []);

  useEffect(() => {
    calculateTotals();
  }, [data]);

  const calculateTotals = () => {
    let totalPrice = 0;
    let totalQuantity = 0;
  

    for (const item of data) {
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    }
    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);
    }

    const handleRemoveItem = (item) => {
      // Remove item from cart state
      const updatedCart = data.filter((cartItem) => cartItem !== item);
      setData(updatedCart);
    
      // Remove item from local storage
      const updatedStorage = JSON.parse(localStorage.getItem('cartItems'));
      const updatedStorageWithoutItem = updatedStorage.filter(
        (storageItem) => storageItem.bookId !== item.bookId);
      localStorage.setItem('cartItems', JSON.stringify(updatedStorageWithoutItem));
    };
    
  return (
    <>
    <Navbar />
     {
      data.map((item, index) => (
        <div className="cart-item" key={index}>
      <img className="book-image" src={item.image} alt="Book" />
      <div className="item-details">
        <h4 className="book-name">{item.bookName}</h4>
        <p className="price">Price: ${item.price}</p>
        <p className="quantity">Quantity:{item.quantity}</p>
      </div>
      <button className="remove-button" onClick={() => handleRemoveItem(item)}>
        Remove
      </button>
    </div>
      ))
     }
     <div className='total'>
      <h3>Total Item: {totalQuantity} </h3>    
      <h3>Total Price: {totalPrice} </h3>
      </div>
    
    </>
  );
};

export default CartItem;
