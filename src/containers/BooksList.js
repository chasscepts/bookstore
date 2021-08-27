//  import { useSelector } from 'react-redux';
import Book from '../components/Book';

export default function BooksList() {
  //  const books = useSelector((state) => state.books);
  const books = [];

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
        {books.map((book) => <Book key={book.id} book={book} />)}
      </tbody>
    </table>
  );
}
