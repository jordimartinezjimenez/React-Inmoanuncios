import "./Home.css";
import React from "react";

function template() {
  return (
    <div className="Home">
      <div id="fondo" className="w-100">
        <div className="position-relative filtrado p-3" style={{ background: "white" }}>
          <form action="">
            {/* <div class="row">
              <div class="col-12 col-md-6 col-lg-2 my-auto">
                <label htmlFor="">Tipo de venta</label>
                <br />
                <input type="text" />
              </div>
              <div class="col-12 col-md-6 col-lg-2 my-auto">
                <label htmlFor="">Provincia</label>
                <br />
                <input type="text" />
              </div>
              <div class="col-12 col-md-6 col-lg-2 my-auto">
                <label htmlFor="">Municipio</label>
                <br />
                <input type="text" />
              </div>
              <div class="col-12 col-md-6 col-lg-2 my-auto">
                <label htmlFor="">Asdf</label>
                <br />
                <input type="text" />
              </div>
              <div class="col-12 col-lg-2 my-auto">
                <button type="submit" class="btn btn-primary">Filtrar</button>
              </div>
            </div> */}
            <div className="d-flex">
              <div>
                <label htmlFor="">Tipo de venta</label>
                <br />
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Provincia</label>
                <br />
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Municipio</label>
                <br />
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Asdf</label>
                <br />
                <input type="text" />
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Filtrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default template;
