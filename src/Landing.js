import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Microfrontend from "./Topics/Microfrontend";
import Advantages from "./Topics/Advantages";
import Features from "./Topics/Features";
import Split from "./Topics/Split";
import Approaches from "./Topics/Approaches";
import Framework from "./Topics/Frameworks";
import SingleSPA from "./Topics/SingleSPA";
import Module from "./Topics/Module";
import ImportMap from "./Topics/ImportMap";

const Landing = () => {
  const list = [
    "Introduction",
    "Advantages",
    "Features",
    "Spliting",
    "Approaches",
    "Framework",
    "SingleSPA",
    "Inbrowser Module v/s BuildTime Module",
    "ImportMap",
  ];
  const listMapping = {
    Introduction: Microfrontend,
    Advantages: Advantages,
    Features: Features,
    Spliting: Split,
    Approaches: Approaches,
    Framework: Framework,
    SingleSPA: SingleSPA,
    "Inbrowser Module v/s BuildTime Module": Module,
    ImportMap: ImportMap,
  };
  const [topics, setTopics] = useState(list);
  const [currentTopic, setCurrentTopic] = useState(listMapping.Introduction);

  const handleSwitch = (current) => {
    setCurrentTopic(listMapping[current]);
  };

  let topicList = null;
  if (topics) {
    topicList = (
      <div>
        {topics.map((item) => {
          return (
            <div
              onClick={() => handleSwitch(item)}
              className=" p-20 text-center border"
            >
              <h3>{item}</h3>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <Container
        fluid
        style={{ height: "100vh", width: "100%", backgroundColor: "#AED6F1 " }}
      >
        <h1 className="text-center">MICRO-FRONTEND</h1>
        <Row style={{ height: "95vh" }}>
          <Col
            md="3"
            className="p-0 m-0"
            style={{ backgroundColor: "#FAD7A0" }}
          >
            {topicList}
          </Col>
          <Col md="9" className="bg-light">
            {currentTopic}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
