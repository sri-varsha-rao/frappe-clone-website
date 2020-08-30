import React from "react";
import CardComp from "./CardComp";

export default function Cards1() {
  return (
    <div className="bg-light py-3">
      <div className="py-5 container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-sm-12 mr-3 my-3 py-3 h-100">
            <CardComp
              title="Small Business Accounting"
              body="Everything you need from a small,
         simple small business accounting tool. Billing, Payments, Ledgers, Invoices, Reporting.
        A fully featured replacement for tools like GNU Cash and Tally."
            />
          </div>
          <div className="col-md-5 col-sm-12 mr-3 my-3 py-3 h-100">
            <CardComp
              title="No Cloud"
              body="Cloud apps make you dependent on service provider.
         A service like that is never truly free, and it does not have to be like that.
         With desktop apps, you have much more control over your data."
            />
          </div>
          <div className="col-md-5 col-sm-12 mr-3 my-3 py-3 h-100">
            <CardComp
              title="Free and Open Source"
              body="Frappe Books is free software.
         This means it comes with the four essential freedoms.
         You are allowed to run it as you wish, you can look at its source code and modify it."
            />
          </div>
          <div className="col-md-5 col-sm-12 mr-3 my-3 py-3 h-100">
            <CardComp
              title="Modern Web Friendly UI"
              body="Frappe Books is built with our homegrown
         framework FrappeJS which is based on NodeJS and bundled with Electron.
         But it is still designed in a way how a desktop software functions."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
