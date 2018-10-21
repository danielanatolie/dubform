import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";
import { Grid, Col,Row, Modal, Button, Image, Navbar, Nav,NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import * as routes from "../constants/routes";

class myEvents extends Component {

  render()
  {
    return (
      <div>
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand className="dubForm">
          <a href="/">dubForm</a>
        </Navbar.Brand>
        <Navbar.Brand>
          <a href="/events">Events</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
            <NavItem  href="/recruit-dash">Logout</NavItem>
        </Nav>
        <Nav pullRight>
            <NavItem onClick={this.handleLogout}>John Doe</NavItem>
        </Nav>

      </Navbar.Collapse>

      </Navbar>

      <Grid>
    <Row className="show-grid">
      <Col sm={6} md={3}>
        <code>
          &lt;
          {'Col sm={6} md={3}'} /&gt;
        </code>
        <br />
      </Col>
      <Col sm={6} md={3}>
        <code>
          &lt;
          {'Col sm={6} md={3}'} /&gt;
        </code>
        <br />
      </Col>
      <Col sm={6} md={3}>
        <code>
          &lt;
          {'Col sm={6} md={3}'} /&gt;
        </code>
        <br />
      </Col>
      <Col sm={6} md={3}>
        <code>
          &lt;
          {'Col sm={6} md={3}'} /&gt;
        </code>
        <br />
      </Col>
    </Row>
  </Grid>


      </div>
    );
  }
}

export default myEvents;
