import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./reducers/reducers"
import middlewares from "./middlewares/middlewares"
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(reducers, middlewares);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);