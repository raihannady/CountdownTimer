// import { useState } from "react";
import "./style/main.scss";
import "./App.css";
import "./style/responsive.scss";

import bottom from "./assets/images/pattern-hills.svg";

import CountdownTimer from "./components/CoundownTimer";
import React from "react";
import Bottom from "./components/Bottom";
import Social from "./components/Social";
import Title from "./components/Title";

const App = () => {
  const targetDate = new Date(2024, 0, 17, 7, 0, 0);

  return (
    <div>
      <Title></Title>
      <CountdownTimer targetDate={targetDate} />
      <Social></Social>
      {/* <div className="bottom">
        <img src={bottom} alt="" />
      </div> */}
    </div>
  );
};

export default App;
