import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function BooksForm({ createBook }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (evt) => {
    setTitle(evt.target.value);
  };

  const handleSelectionChange = (evt) => {
    setCategory(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBook({ id: Math.random(), title, category });
    setTitle('');
    setCategory(categories[0]);
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTextChange} />
      <select value={category} onChange={handleSelectionChange}>
        {
          categories.map((category) => <option key={category} value={category}>{category}</option>)
        }
      </select>
      <input type="submit" value="Add Book" />
    </form>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(undefined, mapDispatchToProps)(BooksForm);
