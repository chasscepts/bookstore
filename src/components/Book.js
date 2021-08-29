import PropTypes from 'prop-types';

const normal = {
  color: '#4386bf',
  fontFamily: 'RobotoSlab',
  fontSize: '0.875rem',
  fontWeight: 300,
};

const button = {
  ...normal,
  border: 'none',
  padding: 0,
  outline: 'none',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

const styles = {
  title: {
    color: '#121212',
    letterSpacing: '-0.2px',
    fontFamily: 'RobotoSlab',
    fontSize: '1.375rem',
    margin: '0.3rem 0',
  },
  category: {
    color: '#121212',
    opacity: 0.5,
    fontFamily: 'Montserrat',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },
  remove: {
    ...button,
    margin: '0 2rem',
  },
  controls: {
    marginTop: '1.2rem',
  },
};

export default function Book({ book, removeBook }) {
  const handleRemoveBook = () => removeBook(book);

  return (
    <div>
      <div style={styles.category}>{book.category}</div>
      <h2 style={styles.title}>{book.title}</h2>
      <div style={normal}>{book.author}</div>
      <div style={styles.controls}>
        <button style={button} type="button">Comments</button>
        <button style={styles.remove} type="button" onClick={handleRemoveBook}>Remove</button>
        <button style={button} type="button">Edit</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};
