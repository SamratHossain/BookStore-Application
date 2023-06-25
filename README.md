mber# BookStore-Application
The BookStore is a web-based application that allows users to explore and manage a collection of books. It provides a user-friendly interface to browse available books. Additionally, users can add books to their cart, specify quantities, and provide shipping information for a seamless purchasing experience.

Key Features

Book Catalog: The system displays a comprehensive catalog of all available books, including details such as title, author, ISBN number and price.

Add New Book: Administrators or authorized users can add new books to the database through a simple and intuitive form. They can input details such as title, author, ISBN number, price, and upload a book cover image.

Cart Management: Users can add books to their virtual shopping cart and review the contents at any time. They have the flexibility to adjust quantities, remove items, or proceed to checkout.

Checkout Process: When ready to complete a purchase, users are guided through a secure checkout process. They can provide shipping information.


The Backend Development Stack For The Project:

python 3.8.0
Python is a high-level, interpreted programming language known for its simplicity and readability. It offers a vast standard library and a thriving ecosystem of third-party packages. Python serves as the primary programming language for the backend development stack.

django 4.1.1
Django is a powerful and popular web framework written in Python. It follows the Model-View-Controller (MVC) architectural pattern and promotes rapid development and code reusability.

djangorestframework    3.14.0 
Django REST Framework is a powerful and flexible toolkit for building web APIs (Application Programming Interfaces) using Django. It extends the capabilities of Django to create RESTful APIs that follow best practices.

SQLite Database
SQLite is a lightweight, serverless, and file-based relational database engine. It is the default database backend in Django and provides a simple yet powerful solution for development and small to medium-sized projects.Its give by default with Django

django-cors-headers    4.1.0
Django CORS headers is a Django package that provides Cross-Origin Resource Sharing (CORS) support for Django web applications. CORS is a mechanism that allows a web page to make requests to a different domain than the one it originated from. It enables web applications to securely access resources from different origins.

Pillow                 7.0.0
The Pillow package in Python is a powerful library for image processing and manipulation. It provides a wide range of functionalities to open, manipulate, and save different image file formats.

The Frontend Development Stack For The Project:

JavaScript
JavaScript is a popular programming language primarily used for client-side web development. It enables the creation of dynamic and interactive web pages by manipulating the Document Object Model (DOM) and handling user interactions. JavaScript is the core language used in the frontend development stack.

React.js
React.js is a JavaScript library developed by Facebook for building user interfaces. It follows a component-based architecture, allowing developers to create reusable UI components and efficiently manage complex application states.

React Router DOM
React Router DOM is a popular routing library for React applications. It provides a declarative way to handle client-side routing, allowing for dynamic navigation and rendering of components based on the current URL.

Project Instruction For Backend:
Clone the GitHub repository on your local computer.
Open the backend root directory where the manage.py file is available
Run this  command from your terminal "python/python3 manage.py runserver 8000"

Project Instruction For Frontend:
Clone the GitHub repository on your local computer.
Open the frontend root directory where the src folder is available
Run this  command from your terminal "npm start"
Before "npm start" make sure you have installed all dependencies
