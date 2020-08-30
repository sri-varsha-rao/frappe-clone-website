import React from "react";
import group from "../pics/group.webp";

export default function Group() {
  return (
    <div className="bg-light">
      <div className="container mt-5 py-5 mb-5">
        <div className="row">
          <h3 className="mx-2 d-block">From the Team Behind ERPNext</h3>

          <span className="text-secondary font-plus col-md-9 py-3">
            We have been building business software for over a decade now.
            Learning from our mistakes and picking the best parts of our
            flagship product ERPNext, we came up with a simple app that does one
            thing well, Accounting.
          </span>
        </div>
        <div className="row">
          <img
            src={group}
            className="img-fluid col-11 py-3 mt-3 mb-5"
            style={{ borderRadius: 30 }}
            alt="2-here"
          />
        </div>
      </div>
    </div>
  );
}
