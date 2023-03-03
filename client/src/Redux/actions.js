import axios from 'axios'

export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const GET_ALL_ACTIVITY = "GET_ALL_ACTIVITY";
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_POPULATION = "FILTER_BY_POPULATION"; 
export const FILTER_BY_ORDEN_AZ = "FILTER_BY_ORDEN_AZ";

export const ERROR = "ERROR";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "POPULATION";

export const DETAIL = "DETAIL";
export const RESET = "RESET";
export const LESS_POPULATION = "LESS_POPULATION";
export const updateActivity = "UPDATE_ACTIVITY";

export const FILTER_BY_TEMPORADA = "FILTER_BY_TEMPORADA";


export const getActivities =()=>{
    return async(dispatch) =>{
        try {
            const response = await axios.get('http://localhost:3001/activities')
            const activity = response.data
            dispatch({
                type: GET_ALL_ACTIVITY,
                payload: activity
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error,})
        }
    }
}

export const orderByName = (payload) => {
    return {
      type: ORDER_BY_NAME,
      payload,
    };
  };
  export const orderByPopulation = (payload) => {
    return {
      type: ORDER_BY_POPULATION,
      payload,
    };
  };
    
export const getCountries = () =>{
    return async (dispatch) =>{
        try {
            const response = await axios.get('http://localhost:3001/countries')
            const countries = response.data
            dispatch({
                type: GET_ALL_COUNTRY,
                payload: countries
            })
            
        } catch (error) {
        dispatch({
            type: ERROR,
            payload: error
        })
    }
    
    }
}
export function postActivity(payload) {
    return async function () {
        try {
            const res = await axios.post('http://localhost:3001/activities/', payload)
            return res;
        } catch (error) {
            console.log(error)
            
        }
    }
}


export function filterCountriesByContinente(payload) {
    return {
      type: FILTER_BY_CONTINENT,
      payload,
    };
  }
  
  export function filterCountryByPopulation(payload) {
    return {
      type: FILTER_BY_POPULATION,
      payload,
    };
  }
  
  export function filterCountryByOrdenAZ(payload) {
    return {
      type: FILTER_BY_ORDEN_AZ,
      payload,
    };
  }
  
  export function filterByActivity(payload) {
    return {
      type: FILTER_BY_ACTIVITIES,
      payload,
    };
}
export const filterCountriesByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload,
  };
};
export const filterCountriesByContinent = (payload) => {
    return {
      type: FILTER_BY_CONTINENT,
      payload,
    };
  };

// export const getDetail = (id) =>{
//     return async function(dispatch){
//         const countryDetail = await axios.get(`http://localhost:3001/countries/${id}`)
    
//                 return dispatch({type:DETAIL, payload: countryDetail.data});
//     };
// };
export const getDetail = (id) =>{
  return async function(dispatch){
      const countryDetail = await axios.get(`http://localhost:3001/countries/${id}`)
  
              return dispatch({type:DETAIL, payload: countryDetail.data[0]});
  };
};

export const searchCountries = (search) => {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/countries?name=" + search
      );
      return dispatch({
        type: SEARCH_COUNTRIES,
        payload: json.data,
      });
    } catch (error) {
      alert("El pais no fue encontrado");
      console.log(error);
    }
  };
};


