import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Navbar from './Navbar';
import Home from './Home';
//import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

// const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
// const home = ReactDOM.createRoot(document.getElementById('root'));
// navbar.render(<App />);
// home.render(<Home />);

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("navbar")
);

ReactDOM.render(
  <>
    <Home />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
