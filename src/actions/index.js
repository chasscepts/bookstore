export const CREATE_BOOK = 'CREATE BOOK';

export const REMOVE_BOOK = 'REMOVE BOOK';

export const createBook = (book) => ({ type: CREATE_BOOK, payload: book });

export const removeBook = (book) => ({ type: REMOVE_BOOK, payload: book });
