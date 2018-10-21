import React, { Component } from 'react';
import { Table, Label, Button } from 'react-bootstrap';

class RecruiterDash extends Component {
  render() {
    return (
      <div>
          <h1><Label>Facebook</Label></h1>
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
        <Button bsStyle="warning">Add Role</Button>
      </div>
    );
  }
}

export default RecruiterDash;
