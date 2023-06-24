import React, { useState } from 'react';

const BookForm = () => {
  const [bookData, setBookData] = useState({
    name: '',
    author: '',
    price: '',
    isbn: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBookData({ ...bookData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append('name', bookData.name);
    formData.append('author', bookData.author);
    formData.append('price', bookData.price);
    formData.append('isbn', bookData.isbn);
    formData.append('image', bookData.image);

    try {
      // Send data to the Python API endpoint using fetch
      const response = await fetch('http://your-python-api-endpoint', {
        method: 'POST',
        body: formData,
      });

      // Handle the response as needed
      const data = await response.json();
      console.log(data);

      // Reset the form
      setBookData({
        name: '',
        author: '',
        price: '',
        isbn: '',
        image: null,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Book Name" value={bookData.name} onChange={handleInputChange} />
      <input type="text" name="author" placeholder="Author" value={bookData.author} onChange={handleInputChange} />
      <input type="text" name="price" placeholder="Price" value={bookData.price} onChange={handleInputChange} />
      <input type="text" name="isbn" placeholder="ISBN" value={bookData.isbn} onChange={handleInputChange} />
      <input type="file" name="image" onChange={handleImageChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
