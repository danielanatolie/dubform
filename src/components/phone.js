import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import "./phone.css";

const Phone = () => {
  return (
      <div id="wazzupBrah">
        <iframe
            width="600"
            height="800"
            src="https://www.youtube.com/embed/5w3cYtJekpw?cc_load_policy=1&autoplay=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
        <Link to={routes.USER_DASH}>
            <div id="endCall">End Call</div>
        </Link>  
    </div>
  );
};

export default Phone;