import React, { Component } from "react";
import "./index.css";
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ContainerComp from "./components/ContainerComp";
import Portfolio from "./components/Portfolio";
import { connect } from "react-redux";

class App extends Component {
constructor(props) {
  super(props);

}

  render() {
    return (
      <Router history={Router}>
      <div className="App">
      <Route exact path="/" component={ContainerComp}/>
      <Route exact path="/Portfolio" render={(routeProps) => <Portfolio {...routeProps} {...this.props} />}/>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    cData: state.cData,
    error: state.error
  };
};
 

export default connect(mapStateToProps)(App);
