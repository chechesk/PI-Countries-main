import { GET_ALL_COUNTRY, 
  ERROR, 
  DETAIL, 
  postActivity, 
  GET_ALL_ACTIVITY, 
  FILTER_BY_CONTINENT, 
  FILTER_BY_ACTIVITIES,
  SEARCH_COUNTRIES,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  FILTER_BY_TEMPORADA
  
   } from "./actions";

const initialState = {
    allCountries:[],
    countries: [],
    detail: [],
    activity: [],
    error: {}
}

export default function rootReducer(state=initialState, action){

    switch(action.type) {
        case GET_ALL_COUNTRY:
           return{
           ...state,
           countries: action.payload,
           allCountries: action.payload
        }
        case ERROR: 
            return{
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state,
                error: action.payload
            }
            case postActivity:
      return {
        ...state,
        activities: [...state.activities, action.payload]
      };

    case GET_ALL_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };

      case DETAIL:
        return {
          ...state,
          detail: action.payload,
      };

      case FILTER_BY_CONTINENT:
        const filtredCountriesByContinent = state.allCountries;
        const continentFilteredBC =
          action.payload === "All"
            ? filtredCountriesByContinent
            : filtredCountriesByContinent.filter(
                (el) => el.continent === action.payload
              );
        return {
          ...state,
          countries: continentFilteredBC,
        };
  
      case FILTER_BY_ACTIVITIES:
        const filtredCountriesByActivities = state.allCountries;
        const continentFilteredBA = filtredCountriesByActivities.filter((c) => {
          return c.activities.find((c) => {
            return c.name === action.payload;
          });
        });
        
        if (action.payload === "todos") {
          return { ...state, countries: filtredCountriesByActivities };
        } else {
          return {
            ...state,
            countries: continentFilteredBA,
          };
        }

        case FILTER_BY_TEMPORADA:
        const filtredCountriesByTemporada = state.allCountries;
        const continentFilteredBATemporada = filtredCountriesByTemporada.filter((c) => {
          return c.activities.find((c) => {
            return c.name === action.payload;
          });
        });
        
        if (action.payload === "Sumer") {
          return { ...state, countries: filtredCountriesByTemporada };
        } else {
          return {
            ...state,
            countries: continentFilteredBATemporada,
          };
        }
        
        case SEARCH_COUNTRIES:
          return {
            ...state,
            countries: action.payload,
          };
    
        case ORDER_BY_NAME:
          let orderCountriesByName =
            action.payload === 'ASCENDENTE'
              ? state.countries.sort((a, b) => {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                })
              : state.countries.sort((a, b) => {
                  if (a.name < b.name) {
                    return 1;
                  }
                  if (a.name > b.name) {
                    return -1;
                  }
                  return 0;
                });
    
          return {
            ...state,
            countries: orderCountriesByName,
          };
    
        case ORDER_BY_POPULATION:
          let orderCountriesByPopulation =
            action.payload === 'ASCENDENTE'
              ? state.countries.sort((a, b) => {
                  if (a.population < b.population) {
                    return 1;
                  }
                  if (a.population > b.population) {
                    return -1;
                  }
                })
              : state.countries.sort((a, b) => {
                  if (a.population < b.population) {
                    return -1;
                  }
                  if (a.population > b.population) {
                    return 1;
                  }
                  return 0;
                });
    
          return {
            ...state,
            countries: orderCountriesByPopulation,
          };
    
      }
    }
    
 
