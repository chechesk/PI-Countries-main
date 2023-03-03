import React from "react";
import s from '../Paginado/paginado.module.css'

export default function Paginado({ countriesPerPage, countries, paginado }) {
    
  
  
    const pageNumbrers = [];
    for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
      pageNumbrers.push(i);
    }
    return (
      <nav className={s.paginadoContainer}>
        <ul className={s.ul}>
          {pageNumbrers &&
            pageNumbrers.map((number) => (
              <li key={number} className={s.list}>
                <button
                  className={s.numeroPaginado}
                  href="#" onClick={() => paginado(number)}>
                  {" "}
                  {number}{" "}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    );
  }
  