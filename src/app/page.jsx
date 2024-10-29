"use client";
import React, { useState } from "react";
import MegaScroll from "react-mega-scroll";

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
      <div style={{ ...styles, background: "#111" }}>react-mega-scroll</div>
      <div style={{ ...styles, background: "#222" }}>Smooth Scrolling</div>
      <div style={{ ...styles, background: "#333" }}>Keyboard Support</div>
      <div style={{ ...styles, background: "#222" }}>State Listeners</div>
      <div style={{ ...styles, background: "#111" }}>Free Forever</div>
    </MegaScroll>
  );
}

export default App;
