//making the five netflix movies using PROPS mthods
// this part is WHAT THIS WILL SHOW  ME ?


import React from 'react';
import ReactDOM from "react-dom";

import Card from "./Card"
import "./index.css";
import Sdata from "./Sdata";


function netcard(value){
  console.log(value);
    return (
    <Card
     sname =  {value.sname}
     imgscr = {value.imgscr}
     title =  {value.title}
     link =  {value.links}
    />
    );
}

// console.log (Sdata[0].sname)
ReactDOM.render(
<>

  <h5 className = "heading_style"> Top five list of Netflix Movies in 2022  </h5>
  
  
   {Sdata.map(netcard)};
   {/* map function */}
  
   </>
  
      ,document.getElementById("root")

);