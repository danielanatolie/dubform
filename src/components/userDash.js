import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import "./userDash.css";
import "./companyEvent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Image } from "react-bootstrap";
import Calendar from 'rc-calendar';

var hello = 1;

class UserDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completeBars: hello,
            show: false,
            showTwo: false
        };
        this.handleHide = this.handleHide.bind(this);
        this.handleHideTwo = this.handleHideTwo.bind(this);
    }

    updateBars() {
        hello++;
    }

    handleHide() {
    this.setState({ show: false });
    }

    handleHideTwo() {
    this.setState({ showTwo: false });
    this.setState({completeBars: 100});
    }

  render() {
    const companyEvent =
      "Recruiting Event: \n 8:30PM Date: Sun. Oct. 21, 2018. Where: University of Washington, info.science building Registration Details: {URL_LINK} Interested? [YES][NO]";
    return (
      <div>
        <Link to={routes.FORM}>
          <div className="home-link">Dubform</div>
        </Link>
        <div className="user-name">John Doe</div>
        <div className="dashHeader">My Companies:</div>
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
                  Upcoming Company Events LALALLALALAL
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="display-linebreak">{companyEvent}</div>{" "}
                <Image src="./companyEvent.png" rounded />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
              </Modal.Footer>
            </Modal>
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
                    <div className="progCompleteSmall progSection">
                    </div>
                    <div className="progComplete progSection">
                    </div>
                    <div className="progComplete progSection">
                        <div className="progButton progButtonCenter" onClick={() => this.setState({ showTwo: true })}>
                            Schedule Phone Interview
                        </div>
                        <Modal
                            show={this.state.showTwo}
                            onHide={this.handleHide}
                            container={this}
                            aria-labelledby="contained-modal-title"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title">
                                Choose your available times:
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Calendar />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleHideTwo}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="progSection">
                    </div>
                    <div className="progSection">
                    </div>
                    <div className="progSection">
                    </div>
                </div>
            ) : (
                <div className="progress">
                    <div className="progComplete progSection">
                    </div>
                    <div className="progComplete progSection">
                        <div className="progButton">
                            Do Phone Interview
                        </div>
                    </div>
                    <div className="progSection">
                    </div>
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
                <div className="progButton">Do Phone Interview</div>
              </div>
              <div className="progSection" />
            </div>
          </div>
          <div className="spacer" />
          <div className="company">
            Amazon{" "}
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
              <div className="progCancelled progSection">
                <div className="progDull progButton">Failed Coding Challenge :(</div>
              </div>
              <div className="progSection">

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
