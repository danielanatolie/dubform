import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";
import { Grid, Col, Row, Modal, Button, Image, Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, Carousel, Badge, Thumbnail } from "react-bootstrap";
import * as routes from "../constants/routes";
import "./seattle.png";

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
      <Carousel>
        <Carousel.Item>
          <img width={1400} height={300}  src="https://www.marsdd.com/wp-content/uploads/2018/06/job-fairs-hackathons-1998x1100.jpg" />
          <Carousel.Caption>
            <h1>Hackathons</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1400} height={300} alt="500x500" src="https://www.greedge.com/blog/wp-content/uploads/2017/08/1429319jakarta-career-day.jpg" />
          <Carousel.Caption>
            <h1>Tech Events</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1400} height={300} alt="500x500" src="https://images.ctfassets.net/7ca9kifzimh6/4E4BoAIvHq2KIIuMQakEq2/089f44baebb3e06399894bcbc458efcd/technology.jpg?q=50&fl=progressive" />
          <Carousel.Caption>
            <h1>Internships</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Grid>
          <Row className="show-grid">
            <Col md={4}>
              <Thumbnail alt="171x180" src="https://pbs.twimg.com/profile_images/1012542719661469696/0ReXCVXV_400x400.jpg" rounded />
                <h4>Tech Talk - Seattle</h4>
                <p>
                  Time: 7:00PM
                  <br></br>
                  Date: Sun. Oct. 21, 2018
                  <br></br>
                  Where: University of Wasington, Dubhacks
                  <br></br>
                  Details: http://dubhacks.co/
                  <br></br>
                  Attendees <Badge>42</Badge>
                  <br></br>
                  <Button bsStyle="success">Attend</Button>

                </p>
            </Col>
            <Col md={4}>
              <Thumbnail alt="171x180" src="https://teenlife.s3.amazonaws.com/media/uploads/listings/BLqgL7cNrgto.jpg" rounded />
              <h4>UBC Career Days</h4>
              <p>
                Time: 5:00PM - 7:00PM
                <br></br>
                Date: Sun. Oct. 21, 2018
                <br></br>
                Where: University of British Columbia, Alumni Centre
                <br></br>
                Details: https://students.ubc.ca/career/career-events/career-days
                <br></br>
                Attendees <Badge>153</Badge>
                <br></br>
                <Button bsStyle="success">Attend</Button>
              </p>
            </Col>
            <Col md={4}>
              <Thumbnail alt="171x180" src="http://weclipart.com/gimg/330CFA72211A0B7C/UW_Logo_University_of_Washington.jpg" rounded />
              <h4>Meetup Group</h4>
              <p>
                Time: 6:00 - 7:30PM
                <br></br>
                Date: Sun. Oct. 21, 2018
                <br></br>
                Where: University of Wasington,
                <br></br>
                Details: React Native Updates
                <br></br>
                Attendees <Badge>304</Badge>
                <br></br>
                <Button bsStyle="success">Attend</Button>
              </p>
            </Col>
          </Row>
      </Grid>


      </div>
    );
  }
}

export default myEvents;
