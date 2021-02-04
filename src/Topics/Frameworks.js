import React from "react";

const Framework = () => {
  return (
    <div>
      <h1 className="text-center mb-3">Frameworks</h1>
      <div>
        <ul>
          <li>single-spa</li>
          <li>frint.js</li>
        </ul>
        <h2>single-spa</h2>
        <p>
          single-spa is a javascript framework for front-end microservices and
          can be implemented with all three popular frameworks/libraries such as
          Angular, React, and Vue.js.
        </p>
        <h2>frint.js</h2>
        <p>
          frint.js is a Modular JavaScript framework for building Scalable and
          Reactive applications. It doesn’t support Angular yet but it supports
          React.
        </p>
      </div>
    </div>
  );
};

export default Framework;
