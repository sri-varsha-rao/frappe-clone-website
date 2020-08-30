import React from "react";
import { Button } from "react-bootstrap";
import "./FreeDesktop.css";

export default function FreeDesktop() {
  return (
    <div className="py-3 mx-3">
      <div
        className="container py-5 text-center rounded"
        style={{ background: "#f0faff" }}
      >
        <div className="row">
          <div className="col-6 mx-auto">
            <h1 className="dark">
              Free Desktop Accounting Software for Small Businesses
            </h1>
            <p className="text-secondary font-plus mt-3 mb-3 py-3">
              Frappe Books simplifies invoicing, billing, and accounting for
              freelancers and small business owners.
            </p>
            <Button variant="primary" size="lg" className="mt-4" active>
              Download For Free
            </Button>{" "}
            <div>
              <small>Available for macOS, Linux and Windows</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
