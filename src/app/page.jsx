"use client";
import React, { useState } from "react";
import MegaScroll from "react-mega-scroll";
import LandingPage from "./sections/LandingPage.jsx";
import SubHeadingSection from "./sections/SubHeadingSection";
import SectionWraper from "./sections/SectionWraper";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "60px",
  textAlign: "center",
  color: "white",
};

function App() {
  const [active, setActive] = useState(0);

  return (
    <MegaScroll onChange={setActive}>
      <div className="relative">
        <LandingPage />
      </div>

      <SubHeadingSection />
      <div style={{ ...styles, background: "#333" }}>
        <SectionWraper />
      </div>
      <div style={{ ...styles, background: "#222" }}>State Listeners</div>
      <div style={{ ...styles, background: "#111" }}>Free Forever</div>
    </MegaScroll>
  );
}

export default App;
