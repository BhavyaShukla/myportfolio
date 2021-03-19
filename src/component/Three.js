import React from 'react'
import Timeline from './Timeline'

const Three = ({isDark}) => {
    return (
        <div>
            <div className={isDark? "container3" : "container3 white"}>
        

            <div className={isDark ? "":"twinkling2"}> </div>

                <h1 className={isDark? "Exp change":"Exp"}>Experience</h1>
              <Timeline isDark={isDark} className="Tline"/>
            </div>
        </div>
    )
}
export default Three;