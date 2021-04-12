import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Home from "./Components/Home";
import QAS from "./Components/QAS";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <div>
          <div className="sideBar">
            <div className="buttonHolder">
              <div className="sideBarButtons hover">
                <Link to="/">Home</Link>
              </div>
              <br></br>
              <div className="sideBarButtons hover">
                <Link to="/quiz">Quiz</Link>
              </div>
              <div className="sideBarButtons hover">
                <Link to="/qas">QAS</Link>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/qas">
              <QAS />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

//look for other APIs
//
