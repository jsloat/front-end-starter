import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const renderAppContainer = () => {
  ReactDOM.render(
    <App name="Application" />,
    document.querySelector('#app-container')
  );
};

if (module.hot) {
  module.hot.accept('/App', renderAppContainer);
}

renderAppContainer();
