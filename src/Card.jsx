import React from "react";


function Card(props){
    
    // console.log (props);
    
    return (
  
      <>
  
      <div className="cards">
       
        <div className="card">
          
          <img src ={props.imgscr} alt ="my_pic"  className="card_imag"/>
          
          {/* all the detaills of netflix card movies */}
          
          <div className="card_info"> 
            
          <span className="card_category"> {props.title} </span>
            
            <h3 className = "card_title"> {props.sname} </h3>
            
            {/* use of '<a>' tag to give the link and show the movie it refer the link */}
  
            <a href = {props.link} target = "_blank">
             
              <button> Watch Now </button>
              
            </a>
    
          </div>
        </div>
      </div>
    
    </>
      
    );
  
  }
  export default Card;