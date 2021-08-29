const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Science Fiction'];

export const randomCategory = () => categories[Math.floor(Math.random() * categories.length)];

export default categories;
