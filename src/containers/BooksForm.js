import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import categories from '../utilities/categories';

function BooksForm({ createBook }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'category') {
      setCategory(value);
    }
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
      <input name="title" type="text" value={title} onChange={handleChange} />
      <select name="category" value={category} onChange={handleChange}>
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
