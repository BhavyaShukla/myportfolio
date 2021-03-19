import One from './component/One'
import Two from './component/Two'
import Three from './component/Three'
import React, { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState(true);


  return (
    <div className="App">
    <One isDark={isDark} setIsDark={setIsDark}  />
    <Two isDark={isDark}/>
    <Three isDark={isDark}/>
    </div>
  );
}

export default App;
