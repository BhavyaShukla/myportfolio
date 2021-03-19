import React,{useEffect} from "react";
import 'aos/dist/aos.css';
import Aos from 'aos'
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMaterialUi } from "react-icons/si";

import { SiApachekafka } from "react-icons/si";
import { GrHadoop } from "react-icons/gr";
import { SiApachespark } from "react-icons/si";


import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { DiSqllite } from "react-icons/di";
import { SiCassandra } from "react-icons/si";

import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
const Skillset = ({ isDark,className }) => {
  useEffect(() => {
    Aos.init({duration:500});
 
}, []);
  const sty = {
    height: "3em",
    width: "3em",
    margin: "0 0.2em",
    color:"white",
    filter: "drop-shadow( 1px 1px 0.5px rgb(0, 0, 0 ))",
    borderRadius:"1em",
  
  };
  const sty2 = {
    height: "3em",
    width: "3em",
    margin: "0 0.2em",
    color:"black",
   
  };
  return (
    <div className={className}>
      <h2  data-aos="fade-up" className="skillhead">All Skills</h2>
      <div className="allskills">
   
          <h4  data-aos="flip-left" className="skh1">Programming Languages: </h4>
          <h4  data-aos="flip-left"className="skh2">Framework: </h4>
          <h4 data-aos="flip-left" className="skh3">Cloud:</h4>
          <h4 data-aos="flip-left" className="skh4">Big Data: </h4>
          <h4 data-aos="flip-left" className="skh5">Database:</h4>
          <h4 data-aos="flip-left" className="skh6">Tools:</h4>

          <div data-aos="zoom-out-down" className="sks1">
          <FaPython className="iconeffects" style={isDark?sty2:sty} />
          <FaJava className="iconeffects" style={isDark?sty2:sty}  />
          <DiJavascript1 className="iconeffects"style={isDark?sty2:sty}  />
          <FaPhp className="iconeffects" style={isDark?sty2:sty}  />
          </div>

    
          <div data-aos="zoom-out-down" className="sks2">
          <FaAngular className="iconeffects"style={isDark?sty2:sty}  />
          <FaReact className="iconeffects" style={isDark?sty2:sty}  />
          <DiDjango className="iconeffects" style={isDark?sty2:sty}  />
          <FaLaravel className="iconeffects" style={isDark?sty2:sty} />
          <SiFlask className="iconeffects" style={isDark?sty2:sty}  />
          <FaBootstrap className="iconeffects" style={isDark?sty2:sty}  />
          <SiMaterialUi className="iconeffects" style={isDark?sty2:sty}  />
          </div>
         
          <div data-aos="zoom-out-down"  className="sks4">
          <SiApachekafka className="iconeffects" style={isDark?sty2:sty}  />
          <GrHadoop className="iconeffects" style={isDark?sty2:sty}  />
          <SiApachespark className="iconeffects" style={isDark?sty2:sty}  />
         
          </div>
          <div data-aos="zoom-out-down" className="sks5">
          <SiMysql className="iconeffects" style={isDark?sty2:sty}  />
          <SiPostgresql className="iconeffects" style={isDark?sty2:sty}  />
          <DiMsqlServer className="iconeffects" style={isDark?sty2:sty}  />
          <DiSqllite className="iconeffects" style={isDark?sty2:sty}  />
          <SiCassandra className="iconeffects" style={isDark?sty2:sty}  />
          </div>
          <div data-aos="zoom-out-down" className="sks6">
          <DiPhotoshop className="iconeffects" style={isDark?sty2:sty}  />
          <DiIllustrator className="iconeffects" style={isDark?sty2:sty}  />
          <FaFigma className="iconeffects" style={isDark?sty2:sty}  />
          <SiTableau className="iconeffects" style={isDark?sty2:sty}  />
          <SiPowerbi className="iconeffects" style={isDark?sty2:sty}  />
          </div>
          <div data-aos="zoom-out-down" className="sks3">
          <h5 style={{padding:"2px 1em",margin:"2px 7px",background:isDark?"black":"rgb(77, 77, 77)",color:isDark?"rgb(255, 255, 255)":"white",borderRadius:"1em"}}>Google App Engine</h5>
          <h5  style={{padding:"2px 1em",margin:"2px 7px",background:isDark?"black":"rgb(77, 77, 77)",color:isDark?"rgb(255, 255, 255)":"white",borderRadius:"1em"}}>Amazon Web Services</h5>
          <h5 style={{padding:"2px 1em ",margin:"2px 7px",background:isDark?"black":"rgb(77, 77, 77)",color:isDark?"rgb(255, 255, 255)":"white",borderRadius:"1em"}} >Microsoft Azure</h5>
          </div>

         
        </div>
      </div>
 
  );
};
export default Skillset;
