import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import './userDash.css';

class UserDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completeBars: 1
        };
    }

    showDropdown() {
        console.log("hi");
    }
    render() {
        return (
            <div>
                <Link to={routes.FORM}> 
                    <div className="home-link">
                        Dubform
                    </div>
                </Link>
                <div className="user-name"> 
                    John Doe
                </div>
                <div className="dashHeader">
                    Your Companies:
                </div>
                <div className="dashContainer">
                    <div className="company">
                        Facebook
                        <div className="progress">
                            <div className="progComplete progSection">
                                    <div className="progButton">
                                        <Link to={routes.CODING} onClick={() => this.showDropdown()}>
                                        Start Coding Challenge
                                        </Link>
                                    </div>
                            </div>
                            <div className="progSection">
        
                            </div>
                            <div className="progSection">
        
                            </div>
                        </div>
                    </div>
                    <div className="spacer">
                    </div>
                    <div className="company">
                        Google
                        <div className="progress">
                            <div className="progComplete progSection">
        
                            </div>
                            <div className="progComplete progSection">
                                <div className="progButton">
                                    Schedule Phone Interview
                                </div>
                            </div>
                            <div className="progSection">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      
    }
}

export default withRouter(UserDash);