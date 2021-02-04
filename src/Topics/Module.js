import React from "react";
import mod_img from "../images/module.png";

const Module = () => {
  return (
    <div>
      <h1 className="text-center">IN-BROWSER MODULE v/s BUILD-TIME MODULE</h1>
      <img style={{ height: "500px", width: "100%" }} src={mod_img}></img>
    </div>
  );
};

export default Module;
