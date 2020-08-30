import React from "react";
import "./Menu.css";
import "./Intro.css";
import illustration from "../pics/illustration.jpeg";
import cashflow from "../pics/cashflow.png";

import { Button, Jumbotron } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="container pt-4 pb-5 mt-3">
      <div className="row py-3 mb-5">
        <div className="col-md-6 col-sm-12 pr-0 pb-5">
          <Jumbotron style={{ background: "white" }}>
            <h1>Free, Modern Desktop Accounting</h1>
            <h5 style={{ color: "gray" }}>
              Simple, well designed, desktop accounting software for freelancers
              and small businesses. Free and Open Source.
            </h5>
            <p>
              <Button variant="primary" size="lg" className="mt-3">
                Download
              </Button>
              <Button
                variant="light text-primary"
                size="lg"
                className="mt-3 ml-3"
              >
                GitHub
              </Button>
            </p>
          </Jumbotron>
        </div>
        <div className="col-md-6 col-sm-12 mx-auto">
          <img src={cashflow} className="img-fluid px-3" alt="1-here" />
        </div>
      </div>

      <img
        src={illustration}
        className="img-fluid col-10 mx-auto px-3 mb-5"
        width="900"
        height="500"
        alt="2-here"
      />
    </div>
  );
};

export default Intro;
