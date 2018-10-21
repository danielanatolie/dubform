import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Button,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

class Phone extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <code>{"<Col xs={12} md={8} />"};</code>
          </Col>
          <Col xs={6} md={4}>
            <form>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Technical Challenge</ControlLabel>
                <FormControl componentClass="textarea" placeholder="textarea" />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Phone;
