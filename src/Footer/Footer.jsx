import "./Footer.css";
import React from "react";

function template() {
  return (
    <div className="Footer">
      <div className="footer container-fluid position-relative bottom-0 left-0">
        <div className="row p-3">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <img src="./yospace-logo.svg" className="img-fluid" alt="logo-footer" /><span className="mt-1 h5">Inmoanuncios</span>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <h4>Columna</h4>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <h4>Columna</h4>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <h4>Redes sociales</h4>
            <a className="instagram" href=""><i class="fa-brands fa-instagram fa-2xl"></i></a>
            <a className="twitter" href=""><i class="fa-brands fa-twitter fa-2xl"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default template;
