import React from "react";
import Bhav1 from "./images/Asset1.svg";
import Bhav2 from "./images/Asset2.svg";


const Bhavya = ({className}) => {
  

  return (
   
      <div className={className}>
        <h4>Results-driven Full Stack Developer with extensive experience in Agile methodologies and a proven track record of delivering high-quality web applications. Skilled in both frontend and backend technologies, with expertise in cloud computing, DevOps practices, and leading development teams. Strong problem-solving abilities and a passion for continuous learning and innovation in software development.
</h4>
        <img className="maji" height={300} src={Bhav1} alt="" />
        <img className="raji" height={288} src={Bhav2} alt="" />
      </div>
      
  );
};
export default Bhavya;
