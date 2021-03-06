import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';
import Coding from './coding';
import Form from './form';
import Events from './events';
import RecruitDash from './recruiterDash';
import UserDash from './userDash';
import Phone from './phone';
import * as routes from "../constants/routes";

const App = () => (
  <Router>
    <div>
        <Route exact path={routes.FORM} component={() => <Form />} />
        <Route exact path={routes.CODING} component={() => <Coding />} />
        <Route exact path={routes.EVENTS} component={() => <Events />} />
        <Route exact path={routes.USER_DASH} component={() => <UserDash />} />
        <Route exact path={routes.RECRUIT_DASH} render={() => <RecruitDash />} />
        <Route exact path={routes.PHONE} render={() => <Phone />} />
    </div>
  </Router>
);

export default App;
