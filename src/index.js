import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// Local imports
import App from './App';
import { reducer } from './components/jsComponents/reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, composedEnhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
