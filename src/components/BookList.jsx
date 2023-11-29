import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList() {
  const { books } = useContext(BooksContext);
  const renderedbooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedbooks}</div>;
}

export default BookList;
