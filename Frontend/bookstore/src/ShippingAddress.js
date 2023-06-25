import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './AddBook.css'
// import './ShippingAddress.css'
import Navbar from './Component/Navbar';

const ShippingAddress = () => {
    const [Name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      
  };

  return (
    <div className='main'>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookName">Name:</label>
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="isbn">Address:</label>
          <input
            type="text"
            id="address"
            value={``}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">City:</label>
          <input
            type="text"
            id="city"
            value={``}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">State:</label>
          <input
            type="number"
            id="state"
            value={``}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Postal Code:</label>
          <input
            type="number"
            id="postalcode"
            value={``}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>

        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default ShippingAddress;
