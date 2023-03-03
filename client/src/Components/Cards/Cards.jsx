import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../Redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import s from '../Cards/Cards.module.css'
import { orderByName, filterCountriesByContinente, orderByPopulation,filterByActivity } from "../../Redux/actions";
import { ASCENDENTE, DESCENDENTE } from "../../Const/Const";


export default function Home(){
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const allActivity = useSelector((state) => state.activity);
  console.log(allActivity);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [Orden, setOrden] = useState("");

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // function handletemporada(e) {
  //   e.preventDefault();
  //   dispatch(filterByActivity(e.target.value));
  //   setCurrentPage(1);
  //   setOrden(e.target.value);
  // }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  function handlePopulation(e) {
      e.preventDefault();
      dispatch(orderByPopulation(e.target.value));
      setCurrentPage(1);
      setOrden(e.target.value);
    }  
    function handleFiltCont(e) {
      e.preventDefault();
      dispatch(filterCountriesByContinente(e.target.value));
      setCurrentPage(1);
      
    }

    function handleActivityfilter(e) {
      e.preventDefault();
      dispatch(filterByActivity(e.target.value));
      setCurrentPage(1);
      
    }
    
  function reloadButton(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return(

    
    <div>
      <div className="cardsContainer">
      <div className="filterContainer">
        <button  id="b1"
          className="filterAndOrder"
          onClick={(e) => reloadButton(e)}>
          Recargar</button>
          
          {/* <select
          className="filterbytemporada"
          onChange={(e) => {
            handletemporada(e);
          }}>
          <option>Filtrar por Orden temporada</option>
          <option value="Summer"> Verano </option>
          { allActivity.map(activity=>{
            return(
              <option key={activity.id} value={activity.season}>{activity.name}</option>
            )
          })}
        </select> */}


            <select
          className="filterAndOrder"
          onChange={(e) => {
            handleSort(e);
          }}>
          <option>Filtrar por Orden Alfabetico</option>
          <option value="ASCENDENTE"> A-Z </option>
          <option value="DESCENDENTE"> Z-A </option>
          </select>

          <select
          className="filterAndOrder"
          onChange={(e) => {
            handlePopulation(e);
          }}>
          <option>Filtrar por Orden Poblacion</option>
          <option value="ASCENDENTE"> Mayor Poblacion </option>
          <option value="DESCENDENTE"> Menor Poblacion</option>
          </select>

          <select
          className="filterAndOrder"
          onChange={(e) => {
            handleActivityfilter(e);
          }}>
          {/* <option>Filtrar por Orden de Actividades</option> */}
          <option value="todos"> Filtrar por Orden de Actividades </option>
          { allActivity.map(activity=>{
            return(
              <option key={activity.id} value={activity.name}>{activity.name}</option>
              )
            })}
          </select>

          <select
          className="filterAndOrder"
          onChange={(e) => {
            handleFiltCont(e);
          }}>
          <option value="All">Filtrar por Continente</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antartida</option>
          <option value="Americas">America</option> 
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
          </select>
          
      </div>
      </div>
      
      <Paginado
      countriesPerPage={countriesPerPage}
      countries={countries.length}
      paginado={paginado}
      currentPage={currentPage}
      />
      
      
      
      <div className={s.allCards}>
    {currentCountry?.map((country) => {
      return (
        <div key={country.id}>
          <Link to={"/home/" + country.id}>
            <Card
              name={country.name}
              flags={country.flags}
              continent={country.continent}
              capital={country.capital}
              population={country.population}
              />
          </Link>
        </div>
      );
    })}
  </div>
  </div>
  
  
  )
}