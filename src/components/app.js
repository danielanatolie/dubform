import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';
import Coding from './coding';
import Form from './form';
import Phone from './phone';
import RecruitDash from './recruiterDash';
import UserDash from './userDash';
import * as routes from "../constants/routes";

const App = () => (
  <Router>
    <div>
        <Route exact path={routes.FORM} component={() => <Form />} />
        <Route exact path={routes.CODING} component={() => <Coding />} />
        <Route exact path={routes.PHONE} component={() => <Phone />} />
        <Route exact path={routes.USER_DASH} component={() => <UserDash />} />
        <Route exact path={routes.RECRUIT_DASH} render={() => <RecruitDash />} />
    </div>
  </Router>
);

export default App;