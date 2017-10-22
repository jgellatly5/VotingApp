import React, { Component } from 'react';
import {Grid, Row, Col, Panel, Jumbotron, Button, Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
// import create from '../.././api/createEntry';

class Home extends Component{
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
      // e.preventDefault();
      // createEntry.create("Donald Trump", null);
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
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td>1</td>
                                <td>Ronald Gump</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow">
                                    Submit
                                </Button>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Billary Hilton</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow">
                                    Submit
                                </Button>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Red Cruz</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow">
                                    Submit
                                </Button>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Boe Jiden</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow">
                                    Submit
                                </Button>
                                </td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Sernie Banders</td>
                                <td>
                                <Button bsStyle="info" className="hvr-grow">
                                    Submit
                                </Button>
                                </td>
                              </tr>
                              </tbody>
                              </Table>
                            </Col>
                            <Col xs={6}>
                              <Panel collapsible defaultExpanded header="Blockchain">
                                  <ListGroup fill>
                                  <ListGroupItem>Block 1</ListGroupItem>
                                  <ListGroupItem>Block 2</ListGroupItem>
                                  <ListGroupItem>Block 3</ListGroupItem>
                                  <ListGroupItem>Block 4</ListGroupItem>
                                  <ListGroupItem>Block 5</ListGroupItem>
                                  <ListGroupItem>Block 6</ListGroupItem>
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
