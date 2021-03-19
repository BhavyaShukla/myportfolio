import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
 const Iconset = ({className}) => {
    return (
        
            <div className="Iconset" >
        <FaTwitterSquare className="twitter" />
        <FaLinkedin className="linkedin" />
        <FaInstagramSquare className="instagram" />
        <FaGithubSquare className="github" />
      </div>
      
    )
}
export default Iconset