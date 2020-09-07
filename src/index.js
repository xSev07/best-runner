import './js/common';
import './assets/css/main.css';
import './assets/scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./js/components/app/app.jsx";

const init = () => {
  ReactDOM.render(
      <App/>,
      document.querySelector(`#root`)
  );
};

init();
