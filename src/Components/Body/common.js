import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-item-center">
        <div className="container m-auto">
          <div className="row">
            <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                {props.intro}
                <strong className="text-info"> Rainbow IT</strong>
              </h1>
              <h4 className="my-3">
                We are the team of talented developer making websites
              </h4>
              <div className="my-3">
                <NavLink to={props.visit} className="btn btn1">
                  {props.visitto}
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1">
              <img src={props.imgsrc} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Common;
