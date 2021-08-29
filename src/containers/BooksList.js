import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import CircularProgressBar from '../components/ProgressBar';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '1.438rem 6.188rem 1.688rem 6.25rem',
  },
  headingWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  pageHeading: {
    color: '#0290ff',
    fontFamily: 'Montserrat',
    fontSize: '1.875rem',
  },
  booksHeading: {
    margin: '0 2rem',
    color: '#121212',
    fontFamily: 'Montserrat',
    fontSize: '0.813rem',
    letterSpacing: '1.9px',
    textTransform: 'uppercase',
  },
  user: {
    color: '#0290ff',
    padding: '0.875rem',
    border: 'solid 1px #e8e8e8',
    borderRadius: '50%',
  },
  row: {
    margin: '2.313rem 6.25rem 0',
    padding: '2rem 4.188rem 1.625rem 1.688rem',
    borderRadius: '4px',
    border: 'solid 1px #e8e8e8',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  percentComplete: {
    margin: '0.063rem 0.75rem 0 0.688rem',
    fontFamily: 'Montserrat',
    fontSize: '2rem',
    color: '#121212',
  },
  completed: {
    margin: '0.438rem 0.75rem 0.75rem',
    opacity: 0.5,
    fontFamily: 'Montserrat',
    fontSize: '0.875rem',
    color: '#121212',
  },
  currentChapterWrap: {
    marginLeft: '2rem',
  },
  currentChapterLabel: {
    textTransform: 'uppercase',
    opacity: 0.5,
    fontFamily: 'RobotoSlab',
    fontSize: '0.813rem',
    fontWeight: 300,
    color: '#121212',
  },
  currentChapter: {
    margin: '0.438rem 0 0.75rem 0',
    fontFamily: 'RobotoSlab',
    fontSize: '1rem',
    fontWeight: 300,
    letterSpacing: '-0.4px',
    color: '#121212',
  },
  updateProgress: {
    textTransform: 'uppercase',
    outline: 'none',
    border: 'none',
    padding: '0.438rem 1.188rem 0.5rem 1.375rem',
    borderRadius: '3px',
    backgroundColor: '#0290ff',
    fontFamily: 'RobotoSlab',
    fontSize: '0.813rem',
    fontWeight: 300,
    letterSpacing: '0.5px',
    textAlign: 'center',
    color: '#fff',
  },
};

function Status() {
  const percent = Math.floor(101 * Math.random());

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CircularProgressBar percent={percent} />
        <div>
          <div style={styles.percentComplete}>{`${percent}%`}</div>
          <div style={styles.completed}>Completed</div>
        </div>
      </div>
    </div>
  );
}

function ChapterProgress() {
  return (
    <div style={styles.currentChapterWrap}>
      <div style={styles.currentChapterLabel}>Current Chapter</div>
      <div style={styles.currentChapter}>{`Chapter ${Math.floor(33 * Math.random())}`}</div>
      <button type="button" style={styles.updateProgress}>Update Progress</button>
    </div>
  );
}

function BooksList({ removeBook, changeFilter }) {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);

  let filteredBooks = books;
  if (filter !== 'All') {
    filteredBooks = books.filter((book) => book.category === filter);
  }

  const handleRemoveBook = (book) => removeBook(book);

  const handleFilterChange = (filter) => changeFilter(filter);

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headingWrap}>
          <h1 style={styles.pageHeading}>BookStore CMS</h1>
          <div style={styles.booksHeading}>Books</div>
          <CategoryFilter filter={filter} changeFilter={handleFilterChange} />
        </div>
        <div style={styles.user}><span>&#128100;</span></div>
      </header>
      <main>
        {filteredBooks.map(
          (book) => (
            <div key={book.id} style={styles.row}>
              <Book book={book} removeBook={handleRemoveBook} />
              <div style={styles.statusWrap}>
                <Status />
                <ChapterProgress />
              </div>
            </div>
          ),
        )}
      </main>
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
