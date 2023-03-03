import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";


export default function Landing () {

    return (
       <div className='container'>
        <div className="landing">
        <h2>Vamonos a recorrer el Mundo</h2>
        <button className="button1"><Link to='/home' className="">Entrar</Link></button>
     
        </div>
        </div>
    )}