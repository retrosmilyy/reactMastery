import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";


//The useEffect is used to run code at very specific point in time 

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);

  };

  //Do not call fetchBook in the app component
  //since it would keep rerendering and create an infinite loop
  // fetchBooks();

  //instead we use the useEffect 
  //Which helps in calling the fetchBooks once when our component is rendered on the screen
 useEffect (() => {
  fetchBooks();

 }, []);

  const editBookById =  async (id, newTitle) => {

   const response =  await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });


    const updatedBooks =  books.map((book) => {
      
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookId = (id) => {

  const response = axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);

    // const updatedBooks = [
    //   ...books,
    //   response.data
    // ];
    // setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookId} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
