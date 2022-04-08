import "./Navbar.css";
import React from "react";
import { Select } from 'antd';


const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function template() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#"><img src="./yospace-logo.svg" className="img-fluid" width="50px" alt="logo-footer" /><span className="mt-1">Inmoanuncios</span></a>
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
              <li className="nav-item mt-1">
                  <>
                    <Select defaultValue="es" style={{ width: 120 }} onChange={handleChange}>
                      <Option value="ca"><img src="./cat.png" alt="catalan" width="25px" /><span className="ms-2">CA</span></Option>
                      <Option value="es"><img src="./esp.png" alt="spanish" width="25px" /><span className="ms-2">ES</span></Option>
                      <Option value="en"><img src="./eng.png" alt="english" width="25px" /><span className="ms-2">EN</span></Option>
                    </Select>
                  </>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default template;
