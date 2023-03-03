import "./App.css";
import React from "react";
import Home from "./Components/Home/Home";
import LandingPage from "./Components/LandingPage/LandingPage";
import ActivityCreate from "./Components/ActivityCreate/ActivityCreate";
import Detail from "./Components/Details/Detail";
//import ActivitiesList from "./Components/ActivitiesList/ActivitiesList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Form" component={ActivityCreate} />
          {/* <Route exact path="/Activities" component={ActivitiesList} /> */}
          <Route exact path="/home/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
