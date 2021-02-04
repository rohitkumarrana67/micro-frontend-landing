import React from "react";
import img from "../images/microfrontend.png";

const Microfrontend = () => {
  return (
    <div className="text-center">
      <h3 className="mb-5">
        Micro-frontends are small applications mostly divided by subdomain or
        functionality working together to deliver a larger application.
      </h3>
      <img src={img}></img>
      <h4 className="mt-3">MICRO-FRONTEND ARCHITECTURE</h4>
    </div>
  );
};

export default Microfrontend;
