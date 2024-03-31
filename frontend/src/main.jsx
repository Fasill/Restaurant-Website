import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'; // Importing combineReducers from Redux
import stateReducer from './store/StateStore';
import pageReducer from './store/PageStore'; // Corrected import path

import App from './App';



const store = configureStore({
  reducer: stateReducer // Passing the combined reducer to the store
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
