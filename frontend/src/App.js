import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Home from "./Components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <div class="sideBar">
            <div className="sideBarButtons">
              <Link to="/">Home</Link>
            </div>

            <br></br>
            <div className="sideBarButtons">
              <Link to="/quiz">Quiz</Link>
            </div>
          </div>
          <Switch>
            <Route path="/quiz">
              <Quiz />
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
