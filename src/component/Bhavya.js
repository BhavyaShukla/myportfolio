import React from "react";
import Bhav1 from "./images/Asset1.svg";
import Bhav2 from "./images/Asset2.svg";


const Bhavya = ({className}) => {
  

  return (
   
      <div className={className}>
        <h4>A passionate programmer with 3 years of experience <br/> software engineering and developing new features <br/>and app 
for different products and company  with all <br/>aspects of the Software Development Life  Cycle to <br/> meet specific 
project and business requirements. <br/><br/>  With a background in computer software, <br/> databases, and Big data 
technology, can work <br/>effectively  in an ever-changing technical world</h4>
        <img className="maji" height={300} src={Bhav1} alt="" />
        <img className="raji" height={288} src={Bhav2} alt="" />
      </div>
      
  );
};
export default Bhavya;
