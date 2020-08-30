import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Cards1 from "./components/Cards1";
import Dashboard from "./components/Dashboard";
import Group from "./components/Group";
import Cards2 from "./components/Cards2";
import FreeDesktop from "./components/FreeDesktop";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Intro />
      <Cards1 />
      <Dashboard />
      <Group />
      <Cards2 />
      <FreeDesktop />
      <Footer />
    </React.Fragment>
  );
}

export default App;
