import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { render } from 'react-dom';
import { loadState, saveState } from './reducers/localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = configureStore(persistedState);

console.log('index token');
console.log(localStorage.FMLToken);

store.subscribe(
  throttle(() => {
    saveState({
      user: store.getState().user,
      data: store.getState().data,
    });
  }),
  1000
);

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
