import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const styles = {
  hrWrap: {
    margin: '0 6.25rem',
  },
  hr: {
    margin: '2.5rem 0.063rem 1.813rem 0',
    border: 'solid 1px #e8e8e8',
  },
};

function App() {
  return (
    <div className="container">
      <BooksList />
      <div style={styles.hrWrap}>
        <hr style={styles.hr} />
      </div>
      <BooksForm />
    </div>
  );
}

export default App;
