import React, { Component } from 'react';
import {Grid, Row, Col, Panel, Jumbotron, Button, Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
// import create from '../.././api/createEntry';

class Home extends Component{
    constructor(props) {
      super(props);
      this.state = {
        block1count: 0,
        block2count: 0,
        block3count: 0,
        block4count: 0,
        block5count: 0,
      }
      this.onSubmitA = this.onSubmitA.bind(this);
      this.onSubmitB = this.onSubmitB.bind(this);
      this.onSubmitC = this.onSubmitC.bind(this);
      this.onSubmitD = this.onSubmitD.bind(this);
      this.onSubmitE = this.onSubmitE.bind(this);
    }
    onSubmitA(e) {
      e.preventDefault();
      // createEntry.create("Donald Trump", null);
      this.setState({
         block1count: this.state.block1count + 1
      });
    }
    onSubmitB(e) {
      e.preventDefault();
      // createEntry.create("Donald Trump", null);
      this.setState({
         block2count: this.state.block2count + 1
      });
    }
    onSubmitC(e) {
      e.preventDefault();
      // createEntry.create("Donald Trump", null);
      this.setState({
         block3count: this.state.block3count + 1
      });
    }
    onSubmitD(e) {
      e.preventDefault();
      // createEntry.create("Donald Trump", null);
      this.setState({
         block4count: this.state.block4count + 1
      });
    }
    onSubmitE(e) {
      e.preventDefault();
      // createEntry.create("Donald Trump", null);
      this.setState({
         block5count: this.state.block5count + 1
      });
    }
    render() {
        return (
            <div>
                <div>
                    <Jumbotron bsClass="description">
                        <h1>Vote using the blockchain!</h1>
                        <Button bsStyle="danger" className="hvr-grow center-block">
                            Create New Entry
                        </Button>
                    </Jumbotron>
                    <Grid>
                        <Row>
                            <Col xs={6}>
                            <Table responsive>
                              <thead>
                              <tr>
                                <th>#</th>
                                <th>Candidate</th>
                                <th>Place Vote?</th>
                                <th>Total Votes</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td>1</td>
                                <td>Ronald Gump</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow" onClick={this.onSubmitA}>
                                    Submit
                                </Button>
                                </td>
                                <td>{this.state.block1count}</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Billary Hilton</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow" onClick={this.onSubmitB}>
                                    Submit
                                </Button>
                                </td>
                                <td>{this.state.block2count}</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Red Cruz</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow" onClick={this.onSubmitC}>
                                    Submit
                                </Button>
                                </td>
                                <td>{this.state.block3count}</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Boe Jiden</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow" onClick={this.onSubmitD}>
                                    Submit
                                </Button>
                                </td>
                                <td>{this.state.block4count}</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Sernie Banders</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow" onClick={this.onSubmitE}>
                                    Submit
                                </Button>
                                </td>
                                <td>{this.state.block5count}</td>
                              </tr>
                              </tbody>
                              </Table>
                            </Col>
                            <Col xs={6}>
                              <Panel collapsible defaultExpanded header="Blockchain">
                                  <ListGroup fill>
                                  <ListGroupItem>Block1</ListGroupItem>
                                  <ListGroupItem>Block2</ListGroupItem>
                                  <ListGroupItem>Block3</ListGroupItem>
                                  <ListGroupItem>Block4</ListGroupItem>
                                  <ListGroupItem>Block5</ListGroupItem>
                                  <ListGroupItem>Block6</ListGroupItem>
                                  </ListGroup>
                              </Panel>
                            </Col>
                        </Row>
                    </Grid>
                  </div>
            </div>
        );
    }
};

export default Home;
