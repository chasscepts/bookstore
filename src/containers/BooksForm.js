import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import categories from '../utilities/categories';

const styles = {
  section: {
    margin: '0 6.25rem',
  },
  heading: {
    margin: '1.813rem 0 1.188rem 0',
    fontFamily: 'Montserrat',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '-0.18px',
    color: '#888',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '1.188rem 0',
  },
  title: {
    flex: '0 0 56.6%',
    padding: '0.813rem 1.063rem',
    borderRadius: '4px',
    border: 'solid 1px #e8e8e8',
    outline: 'none',
    backgroundColor: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    letterSpacing: '-0.15px',
    color: '#c4c4c4',
  },
  category: {
    flex: '0 0 25.2%',
    padding: '0.375rem 0.938rem 0.563rem 1rem',
    borderRadius: '4px',
    border: 'solid 1px #e8e8e8',
    outline: 'none',
    backgroundColor: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    letterSpacing: '-0.15px',
    color: '#c4c4c4',
  },
  submit: {
    flex: '0 0 16.2%',
    fontFamily: 'RobotoSlab',
    fontSize: '0.813rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    textAlign: 'center',
    color: '#fff',
    padding: '0.801rem 1.188rem 0.886rem 1.375rem',
    borderRadius: '3px',
    backgroundColor: '#0290ff',
    outline: 'none',
    border: 'none',
  },
};

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
    <section style={styles.section}>
      <h2 style={styles.heading}>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.row}>
          <input
            style={styles.title}
            name="title"
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Book Title"
          />
          <select style={styles.category} name="category" value={category} onChange={handleChange}>
            {categories.map(
              (category) => <option key={category} value={category}>{category}</option>,
            )}
          </select>
          <input style={styles.submit} type="submit" value="Add Book" />
        </div>
      </form>
    </section>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(undefined, mapDispatchToProps)(BooksForm);
