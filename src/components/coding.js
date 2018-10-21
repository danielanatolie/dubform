import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Button,
  FormGroup,
  FormControl
} from "react-bootstrap";
import * as routes from "../constants/routes";
import { Link, withRouter } from "react-router-dom";
import Countdown from "react-countdown-now";

class Coding extends React.Component {
  render() {
    const question =
      "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.";
    const example =
      "For example, [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).";
    const intputOutput =
      "You are given a target value to search. \nIf found in the array return its index, otherwise return -1.";
    const assumptions =
      "You may assume no duplicate exists in the array. \nYour algorithm's runtime complexity must be in the order of O(log n).";
    const placeholderText =
      "Do not return anything, modify nums in-place instead.";
    return (
      <Grid id="technicalGrid">
        <Row className="show-grid">
          <h1>Technical Challenge</h1>
          <Col xs={6} md={4}>
            <div className="display-linebreak">{question}</div>
            <code>{example}</code>
            <br />
            <br />
            <div className="display-linebreak">{intputOutput}</div>
            <br />
            <div className="display-linebreak">{assumptions}</div>
          </Col>
          <Col xs={12} md={8}>
            <Countdown date={Date.now() + 600000} />
            <form>
              <FormGroup controlId="formControlsTextarea">
                {/* <ControlLabel>Technical Challenge</ControlLabel> */}
                <FormControl
                  componentClass="textarea"
                  style={{ height: "500px" }}
                  placeholder={placeholderText}
                />
              </FormGroup>
              <Link to={routes.USER_DASH}>
                <Button bsStyle="success">
                  Submit
                </Button>
              </Link>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default withRouter(Coding);
