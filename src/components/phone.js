import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import "./phone.css";

const Phone = () => {
  return (
      <div>
        <iframe
            width="600"
            height="600"
            src="https://www.youtube.com/embed/Y4G55jk5Ymg?rel=0&cc_load_policy=1"
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