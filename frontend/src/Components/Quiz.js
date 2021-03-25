import React from "react";
import axios from "axios";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { question: "" },
        { question: "" },
        { question: "" },
        { question: "" },
        { question: "" },
      ],
    };
  }

  handleChangeOfDropDown(id, event) {
    this.setState({ id: id, userAnswer: event.target.value });
  }

  handleWrittenResponse(id, event) {
    this.setState({ id: id, userAnswer: event.target.value });
  }

  //function that uses if/else if statements to determine what state (either userTfAnswer or userAnswer) to pass the user input
  handleStates(id, usersAnswer) {
    if (usersAnswer === "FALSE" || usersAnswer === "TRUE") {
      this.setState({ id: id, userTfAnswer: usersAnswer });
    } else {
      this.setState({ id: id, userAnswer: usersAnswer });
    }
  }

  getQuestion() {
    // Make a request for a user with a given ID
    //get request for API endpoint
    axios
      .get(
        "https://4ycingtvqk.execute-api.us-east-2.amazonaws.com/default/FBLA-quiz"
      )
      .then((response) => {
        //// handle success
        console.log(response.data);
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  displayQuestion(type, data) {
    if (type === "tf") {
      return (
        <div>
          <h4>{data.tfversion}</h4>
          <button onClick={() => this.handleStates(data._id, "TRUE")}>
            true
          </button>
          <button onClick={() => this.handleStates(data._id, "FALSE")}>
            false
          </button>
        </div>
      );
    } else if (type === "mc") {
      return (
        <div>
          <h4>{data.question}</h4>
          <form>
            <input
              type="radio"
              name="answerChoice"
              onClick={() => this.handleStates(data._id, data.c1)}
              id={data.c1}
              value={data.c1}
            />
            <label htmlFor={data.c1}>{data.c1}</label>
            <br />
            <input
              type="radio"
              name="answerChoice"
              onClick={() => this.handleStates(data._id, data.c2)}
              id={data.c2}
              value={data.c2}
            />
            <label htmlFor={data.c2}>{data.c2}</label>
            <br />
            <input
              type="radio"
              name="answerChoice"
              onClick={() => this.handleStates(data._id, data.c3)}
              id={data.c3}
              value={data.c3}
            />
            <label htmlFor={data.c3}>{data.c3}</label>
            <br />
            <input
              type="radio"
              name="answerChoice"
              onClick={() => this.handleStates(data._id, data.c4)}
              id={data.c4}
              value={data.c4}
            />
            <label htmlFor={data.c4}>{data.c4}</label>
          </form>
        </div>
      );
    } else if (type === "dd") {
      return (
        <div>
          <h4>{data.question}</h4>
          <select
            onChange={(event) => this.handleChangeOfDropDown(data._id, event)}
          >
            <option value={data.c1}>{data.c1}</option>
            <option value={data.c2}>{data.c2}</option>
            <option value={data.c3}>{data.c3}</option>
            <option value={data.c4}>{data.c4}</option>
          </select>
        </div>
      );
    } else if (type === "wr") {
      return (
        <div>
          <h4>{data.question}</h4>
          <form>
            <p className="typeBelow">Type your answer below.</p>
            <label>
              <input
                type="text"
                name="name"
                onChange={(event) =>
                  this.handleWrittenResponse(data._id, event)
                }
              />
            </label>
          </form>
          {/* <form>
            <label for="writtenResponse">Type your answer below</label>
            <br />
            <input type="text" id="writtenResponse" name="writtenResponse" />
            <br />
          </form> */}
        </div>
      );
    }
  }
  render() {
    var theQuestion1 = this.displayQuestion("tf", this.state.questions[0]);
    var theQuestion2 = this.displayQuestion("tf", this.state.questions[1]);
    var theQuestion3 = this.displayQuestion("mc", this.state.questions[2]);
    var theQuestion4 = this.displayQuestion("mc", this.state.questions[3]);
    var theQuestion5 = this.displayQuestion("wr", this.state.questions[4]);

    return (
      <div className="content">
        <button className="button" onClick={() => this.getQuestion()}>
          Start when you are ready!
        </button>
        <div className="questions">
          {theQuestion1}
          <br></br>
          <br></br>
          <hr></hr>
          {theQuestion2}
          <br></br>
          <br></br> <hr></hr>
          {theQuestion3}
          <br></br>
          <br></br>
          <hr></hr>
          {theQuestion4}
          <br></br>
          <br></br>
          <hr></hr>
          {theQuestion5}
          <p> {this.state.questions[0].userTfAnswer} </p>
          <p>{this.state.userAnswer}</p>
          <br></br>
          <hr></hr>
        </div>

        {/* <Question questionData={this.state.questions[0]} typeOfQuestion="tf" />
        <Question questionData={this.state.questions[1]} typeOfQuestion="mc" />
        <Question questionData={this.state.questions[2]} typeOfQuestion="mc" />
        <Question questionData={this.state.questions[3]} typeOfQuestion="dd" />
        <Question questionData={this.state.questions[4]} typeOfQuestion="wr" /> */}

        <div>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz;
//---typeOfQuestion= '1'
//tfquestion: blah blah blah?

//---typeOfQuestion= '2'
//question: blah blah blah?
//c1: joe
//c2: joe
//c3: jim
//c3: jay

//NOTE: how will your component look BEFORE a succesful get request ??? hmmmmmmmmmmmmmmmmm
