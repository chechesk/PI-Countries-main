import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";

const Home = ()=>{
    return (
        <div className = 'ContainerPadre'>
          <div className = ''>
          <NavBar/>
         </div> 
         <div className = 'Cards'>
           <Cards/>
         </div>
        </div>
      );
    }

export default Home;