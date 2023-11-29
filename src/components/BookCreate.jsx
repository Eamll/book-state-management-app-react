import PropTypes from "prop-types";
import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Tittle</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

BookCreate.propTypes = {
  onCreate: PropTypes.func
};

export default BookCreate;
