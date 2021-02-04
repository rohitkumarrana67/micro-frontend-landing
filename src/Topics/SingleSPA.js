import React from "react";

const SingleSPA = () => {
  return (
    <div>
      <h2>single-spa apps consist of the following:</h2>
      <h4>
        {" "}
        A single-spa <span className="text-primary">root config</span>, which
        renders the HTML page and the JavaScript that registers applications.
        Each application is registered with three things:{" "}
      </h4>
      <ul>
        <li>A name</li>
        <li>A function to load the application's code</li>
        <li>
          A function that determines when the application is active/inactive
        </li>
      </ul>
      <h4>
        <span className="text-primary">Applications</span> which can be thought
        of as single-page applications packaged up into modules. Each
        application must know how to bootstrap, mount, and unmount itself from
        the DOM.
      </h4>
      <h4 className="mt-5">LIFECYCLES OF REGISTERED APPLICATIONS:</h4>
      <ul>
        <li>Load</li>
        <li>Bootstrap</li>
        <li>Mount</li>
        <li>Un-Mount</li>
      </ul>
    </div>
  );
};

export default SingleSPA;
