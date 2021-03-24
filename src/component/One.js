import React, { useState, useEffect, useRef } from "react";
import Toggle from "react-toggle";
import computer from "./images/computer.jpg";
import Flags from "./Flags";
import Bhavya from "./Bhavya";
import Iconset from "./Iconset";
import {Link} from "react-router-dom";

const One = ({isDark,setIsDark}) => {
  const inp = useRef(null);
    const onk = () => {
    setIsDark(
      isDark = !isDark
    );
    if (isDark) {
      console.log(true)
    }
  };
  let text = [" Frontend Developer", " Full Stack Developer", " Data Analyst"];
  let ogt = "Hi 👋 I am a ";
  let index = 0;
  let count = 0;
  let currentText = "";
  let letter = "";
  const [name, setName] = useState("Bhavya Shuka");
  
 
  useEffect(() => {
    const abc = () => {
      inp.current.focus();
      inp.current.textContent = ogt;
      if (count === text.length) {
        count = 0;
      }
      currentText = text[count];
      letter = currentText.slice(0, ++index);
      inp.current.textContent = letter;
      inp.current.fontWeight = "bold";

      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(abc, 300);
    };

    abc();
  }, []);

  return (
    <div className={isDark ? "container" : "container white"}>
      <div className={isDark ? "":" twinkling"}> </div>
      <section class="fog">
    <div class="fog-container">
      <div class="fog-img fog-img-first"></div>
      <div class="fog-img fog-img-second"></div>
    </div>
    </section>
     <Iconset className="Iconset" />
  
      <div className="Centera">
        <img className="comp" src={computer} alt="" />
        <Bhavya className="Bhav" />

        <h1 style={{margin:"0.5em 1em"}}>{name}</h1>
        <div style={{marginBottom:"1em"}} className="intro">
          <h3>Hi 👋 I am a</h3>
          <h3 className="typing" ref={inp}></h3>
        </div>

        <div>
          <Toggle
            className="DarkToggle"
            checked={isDark}
            onChange={()=>onk()}
            icons={{ checked: "", unchecked: "" }}
            aria-label="Dark mode"
          />
        </div>
      </div>
      <div className="flags">
        <Flags name setName={setName} />
      </div>
    </div>
  );
};
export default One;
