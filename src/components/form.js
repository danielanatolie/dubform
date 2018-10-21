import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";
import { Button, Form, FormGrid,ControlLabel, HelpBlock, FormGroup, FormControl, Row, Col, Container, Pager } from "react-bootstrap";
import * as routes from "../constants/routes";
import "./form.css";

class myForm extends Component {

  grow(event) {
    console.log(event.target);
    var content = event.target;
    var growDiv = content.nextSibling.nextSibling;
    if (growDiv.classList.contains("hidden")) {
      growDiv.classList.remove("hidden");
    } else {
      growDiv.classList.add("hidden");
    }
}

  render() {
    return (
      <div>
      <Row className="show-grid">
        <Col xs={6} md={4}>
        </Col>

        <Col xs={6} md={4}>

          <h1 onClick={(e) => this.grow(e)}>Basic Info</h1>
          <hr/>
          <div className="basicInfo">
            <ControlLabel>Resume/CV</ControlLabel><br/>
            <Button bsStyle="warning">Upload</Button>
            <hr/>
            <FormGroup controlId="formBasicText">
              <ControlLabel>First Name</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="John Doe"
                  />
            </FormGroup>

          <FormGroup controlId="formBasicText">
            <ControlLabel>Phone Number</ControlLabel>
              <FormControl
                type="text"
                placeholder="541-1234-56789"
              />
          </FormGroup>

          <FormGroup controlId="formBasicText">
            <ControlLabel>Email Address</ControlLabel>
              <FormControl
                type="text"
                placeholder="john.doe@uw.edu"
              />
          </FormGroup>
          </div>

          <h1 onClick={(e) => this.grow(e)}>Work Experience</h1>
          <hr/>
          <div className="workExperience hidden">

          <FormGroup controlId="formBasicText">
            <ControlLabel>Job Title</ControlLabel>
              <FormControl
                type="text"
                placeholder="Software Engineer"
              />
          </FormGroup>

          <FormGroup controlId="formBasicText">
            <ControlLabel>Company</ControlLabel>
              <FormControl
                type="text"
                placeholder="Facebook"
              />
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Location</ControlLabel>
              <FormControl
                type="text"
                placeholder="Seattle"
              />

          </FormGroup>
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
            <FormGroup controlId="formBasicText">
              <ControlLabel>From</ControlLabel>
                <FormControl
                  style={{width: '180px'}}
                  type="text"
                  placeholder="08/27/2018"
                />
            </FormGroup>
            </Col>
            <Col md={6} mdPull={6}>
            <FormGroup controlId="formBasicText">
              <ControlLabel>To</ControlLabel>
                <FormControl
                  style={{width: '180px'}}
                  type="text"
                  placeholder="05/03/2018"
                />
            </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <ControlLabel>Description</ControlLabel>
                 <FormControl
                     style={{height: '200px'}}
                     componentClass="textarea"
                   />
          </FormGroup>
          </div>




        <h1 onClick={(e) => this.grow(e)}>Education</h1>
        <hr/>
        <div className="Education hidden">
        <FormGroup controlId="formBasicText">
          <ControlLabel>School</ControlLabel>
            <FormControl
              type="text"
            />
        </FormGroup>

        <FormGroup controlId="formBasicText">
          <ControlLabel>Degree</ControlLabel>
            <FormControl
              type="text"
            />
        </FormGroup>

        <FormGroup controlId="formBasicText">
          <ControlLabel>Field of Study</ControlLabel>
            <FormControl
              type="text"
            />
        </FormGroup>

        <FormGroup controlId="formBasicText">
          <ControlLabel>Minors</ControlLabel>
            <FormControl
              type="text"
            />
        </FormGroup>
        <Row className="show-grid">
          <Col md={6} mdPush={6}>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Finish</ControlLabel>
              <FormControl
                style={{width: '180px'}}
                type="text"
              />
          </FormGroup>
          </Col>
          <Col md={6} mdPull={6}>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Start</ControlLabel>
              <FormControl
                style={{width: '180px'}}
                type="text"
              />
          </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <ControlLabel>Skills</ControlLabel>
               <FormControl
                   style={{height: '200px'}}
                   componentClass="textarea"
                 />
        </FormGroup>
        </div>

        <h1 onClick={(e) => this.grow(e)}>Websites</h1>
        <hr/>
        <div className="website hidden">
        <FormGroup controlId="formBasicText">
          <ControlLabel>Portfolio</ControlLabel>
            <FormControl
              type="text"
            />
        </FormGroup>

        <FormGroup controlId="formBasicText">
          <ControlLabel>Github</ControlLabel>
            <FormControl
              type="text"
            />
        </FormGroup>

        <FormGroup controlId="formBasicText">
          <ControlLabel>Linkedin</ControlLabel>
            <FormControl
              type="text"
            />
        </FormGroup>
        </div>
        </Col>
        <Col xs={6} md={4}>
        </Col>
      </Row>

      <Pager>
        <Pager.Item><Link to={routes.USER_DASH}> Next</Link></Pager.Item>
      </Pager>;
      </div>
    );
  }
}

export default myForm;
