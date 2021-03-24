import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
 const Iconset = ({className}) => {
    return (
        
            <div className="Iconset" >
          <a target="_blank" style={{color: "inherit"}} href="https://twitter.com/bhavya_shukla_">  <FaTwitterSquare className="twitter" /> </a>
          <a target="_blank" style={{color: "inherit"}}  href="https://linkedin.com/in/bhavyashukla/" > <FaLinkedin  className="linkedin" /> </a>
          <a target="_blank" style={{color: "inherit"}} href="https://www.instagram.com/bhavyashukla94/"> <FaInstagramSquare className="instagram" /> </a>
          <a target="_blank" style={{color: "inherit"}} href="https://github.com/BhavyaShukla/">  <FaGithubSquare  className="github" /> </a>
        
      </div>
 
    )
}
export default Iconset