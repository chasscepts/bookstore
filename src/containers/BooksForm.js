import { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default function BooksForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const titleChanged = (evt) => {
    setTitle(evt.target.value);
  };

  const categoryChanged = (evt) => {
    setCategory(evt.target.value);
  };

  const createBook = (evt) => {
    evt.preventDefault();
    return false;
  };

  return (
    <form onSubmit={createBook}>
      <input type="text" value={title} onChange={titleChanged} />
      <select value={category} onChange={categoryChanged}>
        {
          categories.map((category) => <option key={category} value={category}>{category}</option>)
        }
      </select>
      <input type="submit" value="Add Book" />
    </form>
  );
}
