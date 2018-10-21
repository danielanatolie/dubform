import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import './userDash.css';

var hello = 1;

class UserDash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            completeBars: hello
        };
    }

    updateBars() {
        hello++;
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
                        {this.state.completeBars === 1 ? (
                            <div className="progress">
                                <div className="progComplete progSection">
                                    <div className="progButton">
                                        <Link to={routes.CODING} onClick={() => this.updateBars()}>
                                            Start Coding Challenge
                                        </Link>
                                    </div>
                                </div>
                                <div id="test" className="progSection">
                                </div>
                                <div className="progSection">
                                </div>
                            </div>
                        ) : this.state.completeBars === 2 ? (
                            <div className="progress">
                                <div className="progComplete progSection">
                                </div>
                                <div className="progComplete progSection">
                                    <div className="progButton">
                                        <Link to={routes.PHONE} onClick={() => this.updateBars()}>
                                            Schedule Phone Interview
                                        </Link>
                                    </div>
                                </div>
                                <div className="progSection">
                                </div>
                            </div>
                        ) : (
                            <div className="progress">
                                <div className="progComplete progSection">
                                </div>
                                <div className="progComplete progSection">
                                </div>
                                <div className="progComplete progSection">
                                    <div className="progButton">
                                        Pending Offer
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="spacer"></div>
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
                    <div className="spacer"></div>
                    <div className="company">
                        Amazon
                        <div className="progress">
                            <div className="progCancelled progSection">
                                <div className="progDull progButton">
                                   Failed Coding Challenge :(
                                </div>
                            </div>
                            <div className=" progSection">
                                
                            </div>
                            <div className="progSection">
                            </div>
                        </div>
                    </div>
                //hi
                </div>
                <div className="progSection" />
              </div>
            )}
          </div>
          <div className="spacer" />
          <div className="company">
            Google{" "}
            <FontAwesomeIcon
              icon={faInfoCircle}
              size="xs"
              onClick={() => this.setState({ show: true })}
            />
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  Upcoming Company Events
                </Modal.Title>
              </Modal.Header>
              <Image src="http://15f.dubhacks.co/images/fb_link.png" rounded />
              <Modal.Body>{companyEvent}</Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
              </Modal.Footer>
            </Modal>
            <div className="progress">
              <div className="progComplete progSection" />
              <div className="progComplete progSection">
                <div className="progButton">Schedule Phone Interview</div>
              </div>
              <div className="progSection" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserDash);
