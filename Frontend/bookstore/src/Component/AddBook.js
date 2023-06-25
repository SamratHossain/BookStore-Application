import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/AddBook.css'
import Navbar from './Navbar';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [isbn, setISBN] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [BookCover, setBookCover] = useState('');

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('bookname', bookName);
    formData.append('isbn', isbn);
    formData.append('author', author);
    formData.append('price', price);
    formData.append('BookCover', BookCover);
    console.log(formData)
    
    const bookData = {
        bookName,
        isbn,
        author,
        price,
        BookCover,
      };
    // Send data to the backend
    fetch('http://localhost:8000/add-book', {
      method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(bookData),
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from the backend
        console.log('Response from backend server:', data);

        // Reset form fields
        setBookName('');
        setISBN('');
        setAuthor('');
        setPrice('');
        setBookCover('');
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });

      navigate('/')
  };

  return (
    <div>
        <Navbar />
        <h2>Add a Book</h2>
        <div className='main'>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookName">Book Name:</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setISBN(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setBookCover(e.target.files[0])}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default AddBook;
