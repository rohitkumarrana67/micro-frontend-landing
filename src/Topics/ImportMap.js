import React from "react";
import { Container } from "react-bootstrap";
import ImportImg1 from "../images/importmap/importmap1.png";
import ImportImg2 from "../images/importmap/importmap2.png";
import ImportImg3 from "../images/importmap/importmap3.png";
import ImportImg4 from "../images/importmap/importmap4.png";
import ImportImg5 from "../images/importmap/importmap5.png";

const ImportMap = () => {
  return (
    <div>
      <h1 className="text-center">IMPORT-MAPS</h1>
      <Container
        fluid
        className="overflow-auto text-center"
        style={{ height: "80vh" }}
      >
        <img src={ImportImg1} className="mb-5"></img>
        <img src={ImportImg2} className="mb-5"></img>
        <img src={ImportImg3} className="mb-5"></img>
        <img src={ImportImg4} className="mb-5"></img>
        <img src={ImportImg5} className="mb-5"></img>
        <h1>hello</h1>
      </Container>
    </div>
  );
};

export default ImportMap;
