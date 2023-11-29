import PropTypes from "prop-types";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedbooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderedbooks}</div>;
}

BookList.propTypes = {
  books: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.any
};

export default BookList;
