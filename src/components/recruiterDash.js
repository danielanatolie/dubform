import React, { Component } from 'react';
import { Table, Label } from 'react-bootstrap';

class RecruiterDash extends Component {
  render() {
    return (
      <div>
          <h1><Label>Facebook</Label></h1>
          <h3><Label>Frontend Developer</Label></h3>
          <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Candidate</th>
              <th>Score</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>70</td>
              <td>PHONE</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sara</td>
              <td>70</td>
              <td>PHONE</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Max</td>
              <td>40</td>
              <td>Challenge</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default RecruiterDash;
