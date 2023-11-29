import PropTypes from "prop-types";
import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Tittle</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

BookEdit.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.any,
    title: PropTypes.any
  }),

  onSubmit: PropTypes.func
};

export default BookEdit;
