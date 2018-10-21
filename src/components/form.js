import React, { Component } from "react";
import { Button, Form, Grid, Row, Col } from "react-bootstrap";

class myForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col">
            One of three columns
          </div>

          <div className="col">
            One of three columns
          </div>

          <div className="col">
            One of three columns
          </div>

        </div>
          <h1>FORMS</h1>
          <form>
          <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default myForm;
