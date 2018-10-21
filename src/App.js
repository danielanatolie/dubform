import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "../react-router-dom";
import "./App.css";
import Coding from "./coding";
import Form from "./form";
import Phone from "./phone";
import RecruitDash from "./recruiterDash";
import UserDash from "./userDash";
import * as routes from "../constants/routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(spinner);

const App = () => (
  <Router>
    <div>
      <Route exact path={routes.FORM} component={() => <Form />} />
      <Route exact path={routes.CODING} component={() => <Coding />} />
      <Route exact path={routes.PHONE} component={() => <Phone />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.USER_DASH} component={() => <UserDash />} />
      <Route exact path={routes.RECRUIT_DASH} render={() => <RecruitDash />} />
    </div>
  </Router>
);

export default App;
