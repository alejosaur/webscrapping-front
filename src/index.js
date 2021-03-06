import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductContainer from './components/ProductContainer';
import reportWebVitals from './reportWebVitals';
import ProductHistory from './components/ProductHistory';

ReactDOM.render(
  <React.StrictMode>
    <ProductContainer name="unaurlgenerica"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
