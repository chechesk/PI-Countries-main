import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import "./Home.css";


const Home = ()=>{
    return (
        <div className = 'ContainerPadre'>
          <div className = ''>
          <NavBar/>
         </div> 
         <div className = 'cards'>
           <Cards/>
         </div>
        </div>
      );
    }

export default Home;