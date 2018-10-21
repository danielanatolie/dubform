import React, { Component } from "react";
import { Button, Form, FormGrid,ControlLabel, HelpBlock, FormGroup, FormControl, Row, Col, Container, Pager } from "react-bootstrap";

class myForm extends Component {
  render() {
    return (

      <div>
      <Row className="show-grid">
        <Col xs={6} md={4}>
        </Col>

        <Col xs={6} md={4}>
        <form>
          <h1>Basic Info</h1>
          <ControlLabel>Resume/CV</ControlLabel><br/>
          <Button bsStyle="warning">Upload</Button>
          <FormGroup controlId="formBasicText">
            <ControlLabel>First Name</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter your full name"
              />
          </FormGroup>

          <FormGroup controlId="formBasicText">
            <ControlLabel>Phone Number</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter your phone number"
              />
          </FormGroup>

          <FormGroup controlId="formBasicText">
            <ControlLabel>Email Address</ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter email address"
              />
          </FormGroup>


          <h1>Work Experience</h1>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Job Title</ControlLabel>
              <FormControl
                type="text"
              />
          </FormGroup>

          <FormGroup controlId="formBasicText">
            <ControlLabel>Company</ControlLabel>
              <FormControl
                type="text"
              />
          </FormGroup>

          <FormGroup controlId="formBasicText">
            <ControlLabel>Location</ControlLabel>
              <FormControl
                type="text"
              />
          </FormGroup>
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
            <FormGroup controlId="formBasicText">
              <ControlLabel>To</ControlLabel>
                <FormControl
                  style={{width: '180px'}}
                  type="text"
                />
            </FormGroup>
            </Col>
            <Col md={6} mdPull={6}>
            <FormGroup controlId="formBasicText">
              <ControlLabel>From</ControlLabel>
                <FormControl
                  style={{width: '180px'}}
                  type="text"
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
        </form>


        <h1>Education</h1>
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

        <h1>Skills</h1>
        <FormGroup>
          <ControlLabel>Skills</ControlLabel>
               <FormControl
                   style={{height: '200px'}}
                   componentClass="textarea"
                 />
        </FormGroup>

        <h1>Websites</h1>
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

        </Col>
        <Col xs={6} md={4}>
        </Col>
      </Row>

      <Pager>
        <Pager.Item href="/user-dash">Next</Pager.Item>
      </Pager>;
      </div>
    );
  }
}

export default myForm;
