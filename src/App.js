import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";


//The useEffect is used to run code at very specific point in time 

function App() {
const { fetchBooks } = useContext(BooksContext);

  //Do not call fetchBook in the app component
  //since it would keep rerendering and create an infinite loop
  // fetchBooks();

  //instead we use the useEffect 
  //Which helps in calling the fetchBooks once when our component is rendered on the screen
 useEffect (() => {
  fetchBooks();

 }, [fetchBooks]);


  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList  />
      <BookCreate  />
    </div>
  );
}

export default App;
