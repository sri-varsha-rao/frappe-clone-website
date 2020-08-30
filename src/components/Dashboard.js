import React, { useState } from "react";
import "./Dashboards.css";
import { Nav } from "react-bootstrap";
import dashboard from "../pics/dashboard.png";
import invoice from "../pics/invoice.png";
import sales_invoices from "../pics/sales_invoices.webp";
import profit from "../pics/profit.png";
import general from "../pics/general.png";

export default function Dashboard() {
  const [pic, setPic] = useState(dashboard);
  const [select, setSelect] = useState("dashboard");

  const handleChange = (res, resp) => {
    setPic(res);
    setSelect(resp);
  };

  return (
    <div className="container py-3 mb-5">
      <div className="row">
        <div className="col-lg-12 my-5">
          <h1 className="my-2">Everything You Need</h1>
          <span className="text-secondary font-plus mt-3">
            Create professional invoices, generate beautiful PDFs and send them
            to your customers.
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <Nav justify id="nav-id">
            <Nav.Item className={select === "dashboard" ? "active" : ""}>
              <Nav.Link onClick={() => handleChange(dashboard, "dashboard")}>
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={select === "invoice" ? "active" : ""}>
              <Nav.Link onClick={() => handleChange(invoice, "invoice")}>
                Invoicing
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={select === "sales_invoices" ? "active" : ""}>
              <Nav.Link
                onClick={() => handleChange(sales_invoices, "sales_invoices")}
              >
                Payments
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={select === "profit" ? "active" : ""}>
              <Nav.Link onClick={() => handleChange(profit, "profit")}>
                Financial Reports
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={select === "general" ? "active" : ""}>
              <Nav.Link onClick={() => handleChange(general, "general")}>
                Ledger
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="vw-100"></div>
        <div className="col-12">
          <img src={pic} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}
