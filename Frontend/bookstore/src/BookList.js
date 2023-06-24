import React, { useState, useEffect } from 'react';
import './Booklist.css'

const DataDisplay = () => {
  const [data, setData] = useState([]);
  console.log(data)
  const proxy = "http://localhost:8000";

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
      <h1>Choice Your Favorite Books</h1>
      
          <div className="book-list">
        {data.map((book, index) => (
        <div className="book" key={index}>
          <img className="book-cover" src={book.BookCover} alt={book.bookname} />
          <div className="book-details">
            <h3>{book.bookname}</h3>
            <p>ISBN: {book.isbn}</p>
            <p>Author: {book.author}</p>
            <p>Price: ৳{book.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DataDisplay;

// import React from 'react';
// import './Booklist.css'

// const BookList = () => {
//   // Sample book data
//   const books = [
//     {
//       name: 'Book 1',
//       isbn: 'ISBN-123456789',
//       author: 'Author 1',
//       price: '$9.99',
//       cover: 'book1.jpg',
//     },
//     {
//       name: 'Book 2',
//       isbn: 'ISBN-987654321',
//       author: 'Author 2',
//       price: '$12.99',
//       cover: 'book2.jpg',
//     },
//     // Add more books as needed
//   ];

//   return (
//     <div className="book-list">
//       {books.map((book, index) => (
//         <div className="book" key={index}>
//           <img className="book-cover" src={"https://idsb.tmgrup.com.tr/ly/uploads/images/2022/12/19/thumbs/800x531/247181.jpg?v=1671435583"} alt={book.name} />
//           <div className="book-details">
//             <h3>{book.name}</h3>
//             <p>ISBN: {book.isbn}</p>
//             <p>Author: {book.author}</p>
//             <p>Price: {book.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;
