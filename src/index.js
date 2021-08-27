import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers';

const initialState = [
  { id: Math.random(), title: 'Book 1', category: 'Action' },
  { id: Math.random(), title: 'Book 2', category: 'Biography' },
  { id: Math.random(), title: 'Book 3', category: 'History' },
];

const store = createStore(reducer, { books: initialState, filter: 'All' });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
