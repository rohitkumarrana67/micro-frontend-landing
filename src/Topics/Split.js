import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import feature from "../images/features.png";
import page from "../images/page.png";
import section from "../images/section.png";
import domain from "../images/domain.png";

const Split = () => {
  return (
    <div>
      <h1 className="text-center mb-3">How Do We Split Apps</h1>
      <Container fluid className="overflow-auto" style={{ height: "80vh" }}>
        <div className="w-100 d-flex justify-content-center">
          <div style={{ marginBottom: "30px" }}>
            <img
              src={feature}
              style={{ width: "500px", height: "500px" }}
            ></img>
            <h2 className="mx-5">by features</h2>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div style={{ marginBottom: "30px" }}>
            <img src={page} style={{ width: "500px", height: "500px" }}></img>
            <h2 className="mx-5">by pages </h2>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div style={{ marginBottom: "30px" }}>
            <img
              src={section}
              style={{ width: "500px", height: "500px" }}
            ></img>
            <h2 className="mx-5">by sections</h2>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div style={{ marginBottom: "30px" }}>
            <img src={domain} style={{ width: "500px", height: "500px" }}></img>
            <h2 className="mx-5">by domains</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Split;
