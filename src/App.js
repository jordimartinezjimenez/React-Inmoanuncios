/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#"><img src="./yospace-logo.svg" className="img-fluid" alt="logo-footer" /><span className="mt-1">Inmoanuncios</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
              <li className='nav-item'>
                  <>
                    <Select defaultValue="es" style={{ width: 120 }} onChange={handleChange}>
                      <Option value="ca">ca</Option>
                      <Option value="es">es</Option>
                      <Option value="en">en</Option>
                    </Select>
                  </>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default App;
