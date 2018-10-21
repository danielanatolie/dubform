import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import "./userDash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
class UserDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completeBars: 1,
      show: false
    };
    this.handleHide = this.handleHide.bind(this);
  }

  handleHide() {
    this.setState({ show: false });
  }

  showDropdown() {
    this.setState({ completeBars: 2 });
    console.log(this.state.completeBars);
    console.log("hi");
  }
  render() {
    const facebookEvent =
      "Facebook Recruiting: 8:30PM Date: Sun. Oct. 21, 2018 Where: University of Washington, info.science building Registration Details: {URL_LINK} Interested? [YES][NO]";
    const googleEvent =
      "googleEvent Recruiting: 8:30PM Date: Sun. Oct. 21, 2018 Where: University of Washington, info.science building Registration Details: {URL_LINK} Interested? [YES][NO]";
    return (
      <div>
        <Link to={routes.FORM}>
          <div className="home-link">Dubform</div>
        </Link>
        <div className="user-name">John Doe</div>
        <div className="dashHeader">Your Companies:</div>
        <div className="dashContainer">
          <div className="company">
            Facebook{" "}
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
                  Upcoming Facebook Events
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{facebookEvent}</Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
              </Modal.Footer>
            </Modal>
            {this.state.completeBars === 1 ? (
              <div className="progress">
                <div className="progComplete progSection">
                  <div className="progButton">
                    <Link
                      to={routes.CODING}
                      onClick={() => this.showDropdown()}
                    >
                      Start Coding Challenge
                    </Link>
                  </div>
                </div>
                <div className="progSection" />
                <div className="progSection" />
              </div>
            ) : (
              <div className="progress">
                <div className="progComplete progSection" />
                <div className="progComplete progSection">
                  <div className="progButton">Schedule Phone Interview</div>
                </div>
                <div className="progSection" />
              </div>
            )}
          </div>
          <div className="spacer" />
          <div className="company">
            Google <FontAwesomeIcon icon={faInfoCircle} size="xs" />
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
