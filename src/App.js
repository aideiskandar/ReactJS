import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './components/data';
import { Button, Icon, Table, Row, Col, Collapsible, CollapsibleItem, Footer } from 'react-materialize';

class App extends Component {
  
  render() {
    const listItems = data.map((x) =>
    <CollapsibleItem key={x.toString()}
              header={x} />

  );
    return (
      <div className="App">
        <div class="navbar-fixed">
          <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo">Logo</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <br />
        <div className="container">
          <Row>
            <Col s={4} className='grid-example'>
              <Collapsible>
                <CollapsibleItem header={listItems} icon='filter_drama'>
                  Maths
  </CollapsibleItem>
              </Collapsible>
            </Col>
            <Col s={8} className='grid-example'>
              <Table>
                <thead>
                  <tr>
                    
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
        <Footer copyrights="&copy 2015 Copyright Text"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          }
          className='example'
        >
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
      </div>
    );
  }
  
}

export default App;
