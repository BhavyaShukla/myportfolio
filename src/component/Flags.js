import React from 'react';
import uk from './images/united-kingdom.png';
import de from './images/germany.png';
import ind from './images/india.png';

 const Flags = ({name,setName}) => {
  
      const imgst={
          height:"100px",
          width:"100px",
      };
    const tohin=()=>{
        
        setName(
            name="भव्य शुक्ल"
        )
        console.log(name)
    }
    const onc=()=>{
        
        setName(
            name="Bhavya Shukla"
        )
       console.log(name)
    }

    const de1=()=>{
        setName(
            name="Бхавиа Схукла"
        )
        
        console.log(name)
     }
    return (
        <div>
            <div className="mags" >
                <img onClick={()=>onc()} style={imgst} src={uk} alt=""/>
                <img onClick={()=>tohin()} style={imgst} src={ind} alt=""/>
                {/* <img onClick={()=>de1()} style={imgst} src={de} alt=""/> */}
            </div>
        </div>
    )
}
export default Flags