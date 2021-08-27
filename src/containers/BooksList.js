import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

function BooksList({ removeBook, changeFilter }) {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);

  let filteredBooks = books;
  if (filter !== 'All') {
    filteredBooks = books.filter((book) => book.category === filter);
  }

  return (
    <>
      <CategoryFilter filter={filter} changeFilter={changeFilter} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(
            (book) => <Book key={book.id} book={book} removeBook={removeBook} />,
          )}
        </tbody>
      </table>
    </>
  );
}

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(undefined, mapDispatchToProps)(BooksList);
