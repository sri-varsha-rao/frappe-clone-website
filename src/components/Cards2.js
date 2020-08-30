import React from "react";
import CardComp from "./CardComp";

export default function Cards2() {
  return (
    <div className="container py-5 mt-5 mb-3">
      <h3>More Features!</h3>
      <div className="row py-3">
        <div className="col-12 col-lg-3  col-sm-6 mt-2">
          <CardComp
            title="Journal Entries"
            body="
           Record ad-hoc accounting entries for entering expenses, opening entires, and bank payments."
          />
        </div>
        <div className="col-12 col-lg-3  col-sm-6 mt-2">
          <CardComp
            title="Invoice Templates"
            body="Beautiful Invoice templates that you can
            further customize with the color and logo of your brand."
          />
        </div>
        <div className="col-12 col-lg-3  col-sm-6 mt-2">
          <CardComp
            title="Works Offline"
            body="Frappe Books uses a local file from your computer and when you create invoices,
            it saves them on your local machine."
          />
        </div>
        <div className="col-12 col-lg-3  col-sm-6 mt-2">
          <CardComp
            title="Privacy by Default"
            body="Frappe Books data is never uploaded to a cloud,
            which means you never compromise your ownership and privacy."
          />
        </div>
        <div className="col-12 col-lg-3  col-sm-6 mt-2">
          <CardComp
            title="Portable"
            body="Frappe Books uses the lightweight
            SQLite database which uses simple files to store their data."
          />
        </div>
        <div className="col-12 col-lg-3  col-sm-6 mt-2">
          <CardComp
            title="Financial Reports"
            body="Frappe Books comes with standard financial reports like Profit and Loss Statement,
            Trial Balance and Balance Sheet."
          />
        </div>
        <div className="col-12 col-lg-3  col-sm-6 mt-2">
          <CardComp
            title="Multi-currency"
            body="Record your invoices in your customer’s currency and 
           Frappe Books will convert them in your currency."
          />
        </div>
        <div className="col-12 col-lg-3  col-sm-6 mt-2">
          <CardComp
            title="Open Source"
            body="Frappe Books is free and open-source software. Help us improve it by reporting issues or fixing them on GitHub."
          />
        </div>
      </div>
    </div>
  );
}
