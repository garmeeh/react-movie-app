import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/store';
import { history } from './store/store';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

const { store } = configureStore();

renderApp(App, store);

registerServiceWorker();
