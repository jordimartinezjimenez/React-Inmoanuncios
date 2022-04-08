import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';

import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

ReactDOM.render(
  <>
    <Navbar />
  </>,
  document.getElementById("navbar")
);

ReactDOM.render(
  <>
    <Home />
  </>,
  document.getElementById("root")
);

ReactDOM.render(
  <>
    <Footer />
  </>,
  document.getElementById("footer")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
