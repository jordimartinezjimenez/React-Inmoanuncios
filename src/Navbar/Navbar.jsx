import "./Navbar.css";
import React from "react";
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function template() {
  return (
    <div className="navbar">
      Navbar
    </div>
  );
};

export default template;
