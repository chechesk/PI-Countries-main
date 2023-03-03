import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

export default function NavBar() {

    return (
      <div  className='navBarConteiner' >
        <div className='navContent' >
          <div className='countries'>Countries</div>
          <div className='byCreation'>By Jose Romero</div>
        </div>
        <div  className='navContent' id='NavButton' >
        <Link className='navLink' to='/'>Inicio</Link>
        <br></br>
        <Link className='navLink' to='/Home'>Home</Link>
        <br></br>
         <Link className='navLink' to='/Form'>Crear Actividad</Link>
         <br></br>

         <br></br>


        {/* <Link className='navLink'  to='/Activities'>Lista de Actividades</Link>
        <br></br> */}
        {/* <Link className='navLink'  to='/DetailCountry'></Link>  */}

        <SearchBar className='navSearchBar'/>
        <br></br>
      </div>
        </div>
    );
  }