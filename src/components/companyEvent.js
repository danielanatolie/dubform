import React, { Component } from "react";
import "./userDash.css";
import { Modal, Button } from "react-bootstrap";
const CompanyEvent = () => {
  const facebookEvent =
    "Facebook Recruiting: 8:30PM Date: Sun. Oct. 21, 2018 Where: University of Washington, info.science building Registration Details: {URL_LINK} Interested? [YES][NO]";

  return (
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
  );
};
export default CompanyEvent;
