import React, { Component } from 'react';
import * as routes from "../constants/routes";
import {
  Modal, Table, Label,
  Button, FormGroup, FormControl,
  ControlLabel, Navbar, Nav,
  NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";

class RecruiterDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      skills: null,
      showAddRoleModal: false,
      showEventModal: false
    }
    this.showAddRoleModal = this.showAddRoleModal.bind(this);
    this.closeAddRoleModal = this.closeAddRoleModal.bind(this);
    this.showEventModal = this.showEventModal.bind(this);
    this.closeEventModal = this.closeEventModal.bind(this)
    this.updateRoleTitle = this.updateRoleTitle.bind(this);
    this.updateKeySkills = this.updateKeySkills.bind(this);
    this.handleNavSelect = this.handleNavSelect.bind(this);
    this.closeEventsModal = this.closeEventsModal.bind(this);
    this.showEventsModal = this.showEventsModal.bind(this);
  }

  closeAddRoleModal() {
    this.setState({ showAddRoleModal: false });
  }

  showAddRoleModal() {
    this.setState({ showAddRoleModal: true });
  }

  closeEventModal() {
    this.setState({ showEventModal: false });
  }

  showEventModal() {
    this.setState({ showEventModal: true });
  }

  closeEventsModal() {
    this.setState({ showEventsModal: false });
  }

  showEventsModal() {
    this.setState({ showEventsModal: true });
  }

  updateRoleTitle(e) {
    this.setState({ role: e.target.value })
    console.log(this.state.role);
  }

  updateKeySkills(e) {
    this.setState({ skills: e.target.value })
    console.log(this.state.skills);
  }

  handleNavSelect(eventKey, event) {
    if (eventKey === 1) {
      this.showEventsModal();
    }
  }

  render() {
    return (
      <div>
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">dubForm</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav onSelect={k => this.handleNavSelect(k)}>
            <NavItem eventKey={1} href="#">
              Events
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Facebook
            </NavItem>
            <NavItem eventKey={2} href="#">
                <Link to={routes.USER_DASH} style={{ color: '#A9A9A9' }}>Sign out</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        </Navbar>

          <h1><Label>Facebook Interns</Label></h1>
          <h3><Label>Frontend Developer</Label></h3>
          <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Score</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>70</td>
              <td>
                <Button bsStyle="success">Schedule Interview</Button>
              </td>
            </tr>
            <tr>
              <td>Sara</td>
              <td>70</td>
              <td>
                <Button bsStyle="success">Schedule Interview</Button>
              </td>
            </tr>
            <tr>
              <td>Max</td>
              <td>40</td>
              <td>Solving Coding Challenge</td>
            </tr>
          </tbody>
          </Table>
          <h3><Label>UX</Label></h3>
          <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Score</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Smith</td>
              <td>101</td>
              <td>Hired</td>
            </tr>
          </tbody>
        </Table>

        <h1><Label>Facebook Software Engineers</Label></h1>
          <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Score</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>70</td>
              <td>
                <Button bsStyle="success">Schedulde Interview</Button>
              </td>
            </tr>
            <tr>
              <td>Sara</td>
              <td>70</td>
              <td>
                <Button bsStyle="success">Schedulde Interview</Button>
              </td>
            </tr>
            <tr>
              <td>Max</td>
              <td>40</td>
              <td>Solving Coding Challenge</td>
            </tr>
          </tbody>
          </Table>

        <Button
          bsStyle="warning"
          onClick={this.showAddRoleModal}
        >
            Add Role
        </Button>
        {" "}
        <Button
          bsStyle="info"
          onClick={this.showEventModal}
        >
            Add Event
        </Button>

        <Modal show={this.state.showAddRoleModal} onHide={this.closeAddRoleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Role</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                  <ControlLabel>Role Title</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="ex. nodeJS, AWS, Backend"
                      onChange={this.updateRoleTitle}
                    />
                  <hr />
                  <ControlLabel>Key Skills</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="ex. nodeJS, AWS, Backend"
                      onChange={this.updateKeySkills}
                    />
                  <FormControl.Feedback />
                  </FormGroup>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={this.closeAddRoleModal}>Add</Button>
            <Button onClick={this.closeAddRoleModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showEventModal} onHide={this.closeEventModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                  <ControlLabel>Event Title</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Facebook Tech Talk"
                    />
                  <ControlLabel>Time</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="8:30PM"
                      onChange={this.updateKeySkills}
                    />
                  <ControlLabel>Date</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Sun. Oct. 21, 2018"
                      onChange={this.updateKeySkills}
                  />
                  <ControlLabel>Where</ControlLabel>
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="University of Washington, info.science building"
                        onChange={this.updateKeySkills}
                    />
                  <ControlLabel>Registration Details</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="http://dubhacks.co/"
                      onChange={this.updateKeySkills}
                  />
                  <FormControl.Feedback />
                  </FormGroup>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={this.closeEventModal}>Add</Button>
            <Button onClick={this.closeEventModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showEventsModal} onHide={this.closeEventsModal} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Facebook's Events: </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <h4>Tech Talk - Seattle</h4>
                    <p>
                      Time: 7:00PM
                      <br></br>
                      Date: Sun. Oct. 21, 2018
                      <br></br>
                      Where: University of Wasington, Dubhacks
                      <br></br>
                      Details: http://dubhacks.co/
                    </p>
                    <h4>UBC Career Days</h4>
                    <p>
                      Time: 5:00PM - 7:00PM
                      <br></br>
                      Date: Sun. Oct. 21, 2018
                      <br></br>
                      Where: University of British Columbia, Alumni Centre
                      <br></br>
                      Details: https://students.ubc.ca/career/career-events/career-days
                    </p>
                    <h4>Meetup Group</h4>
                    <p>
                      Time: 6:00 - 7:30PM
                      <br></br>
                      Date: Sun. Oct. 21, 2018
                      <br></br>
                      Where: University of Wasington,
                      <br></br>
                      Details: React Native Updates
                    </p>
                  </FormGroup>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="info" onClick={this.closeEventsModal}>Edit</Button>
            <Button onClick={this.closeEventsModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default RecruiterDash;
