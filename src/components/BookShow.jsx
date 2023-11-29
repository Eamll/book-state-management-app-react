import PropTypes from "prop-types";
import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-hooks-context";
function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

BookShow.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.any,
    title: PropTypes.any
  }),
  onDelete: PropTypes.func,
  onEdit: PropTypes.any
};

export default BookShow;
