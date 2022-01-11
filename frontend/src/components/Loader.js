import React from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/loader.css'

const Loader = () => {
  return (
    
    <div className="divPadre">
      <div className="divHijo">
        <Spinner color="primary" className="spinnerReactstrap"/>
      </div>
    </div>
  );
};

export default Loader;
