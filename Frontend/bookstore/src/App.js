import logo from './logo.svg';
import './App.css';
import './Navbar'
import Navbar from './Navbar';
import BookList from './BookList'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BookList></BookList>
    </div>
  );
}

export default App;
