import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

function BooksList({ removeBook }) {
  const books = useSelector((state) => state.books);

  const handleRemoveBook = (book) => removeBook(book);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(
          (book) => <Book key={book.id} book={book} removeBook={handleRemoveBook} />,
        )}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

export default connect(undefined, mapDispatchToProps)(BooksList);
