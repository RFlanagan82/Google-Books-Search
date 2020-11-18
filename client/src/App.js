import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Jumbotron />
        <Switch>
        <Route exact path="/" component={Search} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;