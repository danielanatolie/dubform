import React, { Component } from 'react';
import { Modal, Table, Label, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class RecruiterDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      skills: null,
      showAddRoleModal: false
    }
    this.showAddRoleModal = this.showAddRoleModal.bind(this);
    this.closeAddRoleModal = this.closeAddRoleModal.bind(this);
    this.updateRoleTitle = this.updateRoleTitle.bind(this);
    this.updateKeySkills = this.updateKeySkills.bind(this);
  }

  closeAddRoleModal() {
    this.setState({ showAddRoleModal: false });
  }

  showAddRoleModal() {
    console.log('Show add role!');
    this.setState({ showAddRoleModal: true });
  }



  updateRoleTitle(e) {
    this.setState({ role: e.target.value })
    console.log(this.state.role);
  }

  updateKeySkills(e) {
    this.setState({ skills: e.target.value })
    console.log(this.state.skills);
  }

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
        <Button
          bsStyle="warning"
          onClick={this.showAddRoleModal}
        >
            Add Role
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
      </div>
    );
  }
}

export default RecruiterDash;
