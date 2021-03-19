import React from 'react'

import Skillset from "./Skillset"

 const Two = ({isDark}) => {
    
    return (
        <div>
            <div className={isDark?"container2":"container2 org"}>

               
                <Skillset isDark={isDark} className="skillset"/>
            
                
            </div>
        </div>
    )
}
export default Two;