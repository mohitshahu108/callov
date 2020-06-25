import React, { Fragment } from "react";
import "./App.css";
import NavBar from './components/navBar';
import Footer from './components/footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlayMore from './components/playMore';
import About from './components/about';
import Rcalculator from "./components/rcalculator";


class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <NavBar />
          <Route path="/" component={Rcalculator} />
          <Route path="/playmore" component={PlayMore} />
          <Route path="/about" component={About} />
        </Router>
        <br />
        <Footer />
      </Fragment >
    );
  }
}

export default App;
