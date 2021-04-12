import React from "react";
import axios from "axios";
import * as moment from "moment";
import Confetti from "react-confetti";
import ReactToPrint from "react-to-print";

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
      currentAnswers: [
        {
          id: "",
          userAnswer: "Q: NOT ANSWERED",
          userTfAnswer: "T/F: NOT ANSWERED",
        },
        {
          id: "",
          userAnswer: "Q: NOT ANSWERED",
          userTfAnswer: "T/F: NOT ANSWERED",
        },
        {
          id: "",
          userAnswer: "Q: NOT ANSWERED",
          userTfAnswer: "T/F: NOT ANSWERED",
        },
        {
          id: "",
          userAnswer: "Q: NOT ANSWERED",
          userTfAnswer: "T/F: NOT ANSWERED",
        },
        {
          id: "",
          userAnswer: "Q: NOT ANSWERED",
          userTfAnswer: "T/F: NOT ANSWERED",
        },
      ],
      answers: ["", "", "", "", ""],
      checker: [
        { check: "" },
        { check: "" },
        { check: "" },
        { check: "" },
        { check: "" },
      ],
      popupOpacity: 1,
      popupVisibility: "visible",
      isStarted: false,
      time: 0,
      congratsPopupVisibility: "hidden",
      congratsPopupOpacity: 0,
      reportPopupVisibility: "hidden",
      reportPopupOpacity: 0,
      checkSymbol: "",
      showType: false,
      userName: "<enter name>",
      getQuestionButtonClicked: false,
      score: 0,
      submitUserAnswers: false,
    };
  }

  handleChangeOfDropDown(id, event, qNum) {
    var temp = this.state.currentAnswers;
    temp[qNum].id = id;
    temp[qNum].userAnswer = event.target.value;
    this.setState({ currentAnswers: temp });
  }

  handleWrittenResponse(id, event, qNum) {
    var temp = this.state.currentAnswers;
    temp[qNum].id = id;
    temp[qNum].userAnswer = event.target.value;
    this.setState({ currentAnswers: temp });
  }

  //function that uses if/else if statements to determine what state (either userTfAnswer or userAnswer) to pass the user input
  handleStates(id, usersAnswer, qNum) {
    var temp = this.state.currentAnswers;
    temp[qNum].id = id;
    if (usersAnswer === "FALSE" || usersAnswer === "TRUE") {
      temp[qNum].userTfAnswer = usersAnswer;
      this.setState({ currentAnswers: temp });
    } else {
      temp[qNum].userAnswer = usersAnswer;
      this.setState({ currentAnswers: temp });
    }
  }

  getQuestion() {
    // Make a request for a user with a given ID
    this.setState(
      {
        getQuestionButtonClicked: true,
      },
      () => {
        //get request for API endpoint
        axios
          .get(
            "https://4ycingtvqk.execute-api.us-east-2.amazonaws.com/default/FBLA-quiz"
          )
          .then((response) => {
            //// handle success
            console.log(response.data);
            this.setState({
              questions: response.data,
              popupOpacity: 0,
              popupVisibility: "hidden",
            });
          })
          .then(() => {
            this.setState({
              isStarted: true,
              time: this.state.time,
            });

            this.timer = setInterval(
              () =>
                this.setState({
                  time: this.state.time + 1,
                }),
              1000
            );
          })
          .catch((error) => {
            // handle error
            console.log(error);
          });
      }
    );
  }

  //collect userAnswer or userTfAnswer and quetion id
  getAnswers() {
    var i;
    for (i = 0; i < 5; i++) {
      if (
        this.state.currentAnswers[i].userAnswer === "Q: NOT ANSWERED" &&
        this.state.currentAnswers[i].userTfAnswer === "T/F: NOT ANSWERED"
      ) {
        alert("Please fill out all fields.");
        return -1;
      }
    }
    this.setState({ submitUserAnswers: true }, () => {
      axios
        .post(
          "https://4ycingtvqk.execute-api.us-east-2.amazonaws.com/default/FBLA-quiz?id1=" +
            this.state.currentAnswers[0].id +
            "&id2=" +
            this.state.currentAnswers[1].id +
            "&id3=" +
            this.state.currentAnswers[2].id +
            "&id4=" +
            this.state.currentAnswers[3].id +
            "&id5=" +
            this.state.currentAnswers[4].id
        )
        .then((response) => {
          //// handle success
          console.log(response.data);
          this.setState({
            answers: response.data,
            congratsPopupVisibility: "visible",
            congratsPopupOpacity: 1,
          });
        })
        .then(() => {
          this.gradeQuestions();
        })
        .then(() => {
          this.setState({
            isStarted: false,
          });
          clearInterval(this.timer);
        })

        .catch((error) => {
          // handle error
          console.log(error);
        });
    });
  }

  gradeQuestions() {
    var temp = this.state.checker;
    var i;
    for (i = 0; i < 5; i++) {
      if (this.state.currentAnswers[i].userAnswer !== "Q: NOT ANSWERED") {
        if (
          this.state.answers[i].answer ===
          this.state.currentAnswers[i].userAnswer
        ) {
          temp[i].check = "✔️";
        } else {
          temp[i].check = "	❌";
        }
      }
      if (this.state.currentAnswers[i].userTfAnswer !== "T/F: NOT ANSWERED") {
        if (
          this.state.answers[i].tfanswer ===
          this.state.currentAnswers[i].userTfAnswer
        ) {
          temp[i].check = "✔️";
        } else {
          temp[i].check = "	❌";
        }
      }
    }
    this.setState({ checker: temp });
    var n;
    var correct = 0;
    for (n = 0; n < 5; n++) {
      if (temp[n].check === "✔️") {
        correct++;
      }
    }

    var percent = correct * 20;
    var score = "Score: " + percent.toString() + "%";
    this.setState({ score: score });
  }
  // else
  // if (this.state.currentAnswers.userAnswer === "Q: NOT ANSWERED") {
  //   if (
  //     this.state.currentAnswers.userTfAnswer === this.state.answers.tfanswer
  //   ) {
  //     this.setState({ check: "correct" });
  //   } else {
  //     this.setState({ check: "incorrect" });
  //   }
  // } else {
  //   if (this.state.currentAnswers.userAnswer === this.state.answers.answer) {
  //     this.setState({ check: "correct" });
  //   } else {
  //     this.setState({ check: "incorrect" });
  //   }

  displayQuestion(type, data, qNum) {
    if (type === "tf") {
      return (
        <div>
          <h4>{data.tfversion}</h4>
          <button
            onClick={() => this.handleStates(data._id, "TRUE", qNum)}
            style={{
              background:
                this.state.currentAnswers[qNum].userTfAnswer === "TRUE"
                  ? "rgb(107, 8, 8)"
                  : "transparent",
              color:
                this.state.currentAnswers[qNum].userTfAnswer === "TRUE"
                  ? "white"
                  : "rgb(107, 8, 8)",
            }}
          >
            True
          </button>
          <button
            onClick={() => this.handleStates(data._id, "FALSE", qNum)}
            style={{
              background:
                this.state.currentAnswers[qNum].userTfAnswer === "FALSE"
                  ? "rgb(107, 8, 8)"
                  : "transparent",
              color:
                this.state.currentAnswers[qNum].userTfAnswer === "FALSE"
                  ? "white"
                  : "rgb(107, 8, 8)",
            }}
          >
            False
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
              onClick={() => this.handleStates(data._id, data.c1, qNum)}
              id={data.c1}
              value={data.c1}
            />
            <label htmlFor={data.c1}>{data.c1}</label>
            <br />
            <input
              type="radio"
              name="answerChoice"
              onClick={() => this.handleStates(data._id, data.c2, qNum)}
              id={data.c2}
              value={data.c2}
            />
            <label htmlFor={data.c2}>{data.c2}</label>
            <br />
            <input
              type="radio"
              name="answerChoice"
              onClick={() => this.handleStates(data._id, data.c3, qNum)}
              id={data.c3}
              value={data.c3}
            />
            <label htmlFor={data.c3}>{data.c3}</label>
            <br />
            <input
              type="radio"
              name="answerChoice"
              onClick={() => this.handleStates(data._id, data.c4, qNum)}
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
            onChange={(event) =>
              this.handleChangeOfDropDown(data._id, event, qNum)
            }
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
                  this.handleWrittenResponse(data._id, event, qNum)
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

  // handlePopup() {
  //   this.setState({
  //     popupOpacity: 0,
  //     popupVisibility: "hidden",
  //   });
  // }

  handleType() {
    this.setState({ showType: !this.state.showType });
  }
  getUsersName(event) {
    this.setState({ userName: event.target.value });
  }

  render() {
    var theQuestion1 = this.displayQuestion("tf", this.state.questions[0], 0);
    var theQuestion2 = this.displayQuestion("tf", this.state.questions[1], 1);
    var theQuestion3 = this.displayQuestion("mc", this.state.questions[2], 2);
    var theQuestion4 = this.displayQuestion("dd", this.state.questions[3], 3);
    var theQuestion5 = this.displayQuestion("wr", this.state.questions[4], 4);
    const { width, height } = 59;
    return (
      <div className="contentQuiz">
        <div
          style={{
            visibility: this.state.popupVisibility,
            opacity: this.state.popupOpacity,
            transition: "all 1s",
          }}
          className="popUp"
        >
          <div className="whitePopup">
            {/* <button className="button" onClick={() => this.getQuestion()}>
          Start when you are ready!
        </button> */}
            <div className="popupText">
              <h4>
                Welcome to FBLA 5 question Quiz! There will be no time limit,
                but a timer will run to help you keep check. If you take this
                quiz again, try to cut down your time to become an expert on
                FBLA!
              </h4>
              <p>By clicking continue, the timer will begin.</p>
            </div>

            <button
              onClick={() => this.getQuestion()}
              className="closeButton"
              style={{
                pointerEvents: this.state.getQuestionButtonClicked
                  ? "none"
                  : "all",
              }}
            >
              {this.state.getQuestionButtonClicked ? "Loading..." : "BEGIN"}
            </button>
          </div>
        </div>

        <div
          style={{
            visibility: this.state.congratsPopupVisibility,
            opacity: this.state.congratsPopupOpacity,
            transition: "all 1s",
          }}
          className="popUp"
        >
          <Confetti width={width} height={height} />
          <div className="congratsPopupBox">
            <div>
              <h1 className="congrats">Congratulations!</h1>

              {/* <p className="congratsSubtitle">
                You have completed the FBLA 5 question quiz.
              </p> */}
              <h1>{this.state.score}</h1>

              <h1 className="timeTaken">
                Time taken:
                {moment()
                  .hour(0)
                  .minute(0)
                  .second(this.state.time)
                  .format(" HH : mm : ss")}
              </h1>
              <button
                onClick={() =>
                  this.setState({
                    reportPopupVisibility: "visible",
                    reportPopupOpacity: 1,
                    congratsPopupVisibility: "hidden",
                    congratsPopupOpacity: 0,
                  })
                }
              >
                View Report
              </button>
              <button onClick={() => window.location.reload()}>
                Try Again
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            visibility: this.state.reportPopupVisibility,
            opacity: this.state.reportPopupOpacity,
            transition: "all 1s",
          }}
          className="popUpReport"
        >
          <div className="overlay"></div>
          <div className="mainReportDiv">
            <div className="setting">
              <br></br>
              <br></br>
              <h3>Report Settings: </h3>
              <label>View/Hide question types </label>
              <button
                onClick={() => this.handleType()}
                style={{
                  background: this.state.showType
                    ? "rgb(107, 8, 8)"
                    : "transparent",
                  color: this.state.showType ? "white" : "rgb(107, 8, 8)",
                }}
              >
                Toggle Type
              </button>
              <br></br>
              <label>Enter your name: </label>
              <input
                type="text"
                onChange={(event) => this.getUsersName(event)}
                value={this.state.userName}
              />{" "}
              <br></br>
              <br></br>
              <ReactToPrint
                trigger={() => {
                  return (
                    <a href="# " className="printButton hover">
                      Print Report
                    </a>
                  );
                }}
                content={() => this.componentRef}
              />
            </div>

            <div
              ref={(el) => (this.componentRef = el)}
              className="questionReport"
            >
              <div className="timeAndScore">
                <h1>{this.state.userName}'s Report</h1>
                <h5>
                  Time taken:
                  {moment()
                    .hour(0)
                    .minute(0)
                    .second(this.state.time)
                    .format(" HH : mm : ss ")}
                  ~ {this.state.score}
                </h5>
              </div>
              <h1>Questions</h1>

              <h4>
                {this.state.checker[0].check}
                Q1 {this.state.questions[0].question}
              </h4>
              <p>Your answer: {this.state.currentAnswers[0].userTfAnswer}</p>
              <p>Correct answer: {this.state.answers[0].tfanswer}</p>
              <i
                style={{
                  visibility: this.state.showType ? "visible" : "hidden",
                  opacity: this.state.showType ? "1" : "0",
                  transition: "all 1s",
                  background: "rgb(107, 8, 8)",
                  color: "white",
                }}
              >
                Question type: {this.state.questions[0].type}
              </i>

              <h4>
                {this.state.checker[1].check} Q2{" "}
                {this.state.questions[1].question}
              </h4>
              <p>Your answer: {this.state.currentAnswers[1].userTfAnswer}</p>
              <p>Correct answer: {this.state.answers[1].tfanswer}</p>
              <i
                style={{
                  visibility: this.state.showType ? "visible" : "hidden",
                  opacity: this.state.showType ? "1" : "0",
                  transition: "all 1s",
                  background: "rgb(107, 8, 8)",
                  color: "white",
                }}
              >
                Question type: {this.state.questions[1].type}
              </i>

              <h4>
                {this.state.checker[2].check} Q3{" "}
                {this.state.questions[2].question}
              </h4>
              <p>Your answer: {this.state.currentAnswers[2].userAnswer}</p>
              <p>Correct answer: {this.state.answers[2].answer}</p>
              <i
                style={{
                  visibility: this.state.showType ? "visible" : "hidden",
                  opacity: this.state.showType ? "1" : "0",
                  transition: "all 1s",
                  background: "rgb(107, 8, 8)",
                  color: "white",
                }}
              >
                Question type: {this.state.questions[2].type}
              </i>

              <h4>
                {this.state.checker[3].check} Q4{" "}
                {this.state.questions[3].question}
              </h4>
              <p>Your answer: {this.state.currentAnswers[3].userAnswer}</p>
              <p>Correct answer: {this.state.answers[3].answer}</p>
              <i
                style={{
                  visibility: this.state.showType ? "visible" : "hidden",
                  opacity: this.state.showType ? "1" : "0",
                  transition: "all 1s",
                  background: "rgb(107, 8, 8)",
                  color: "white",
                }}
              >
                Question type: {this.state.questions[3].type}
              </i>

              <h4>
                {this.state.checker[4].check} Q5{" "}
                {this.state.questions[4].question}
              </h4>
              <p>Your answer: {this.state.currentAnswers[4].userAnswer}</p>
              <p>Correct answer: {this.state.answers[4].answer}</p>
              <i
                style={{
                  visibility: this.state.showType ? "visible" : "hidden",
                  opacity: this.state.showType ? "1" : "0",
                  transition: "all 1s",
                  background: "rgb(107, 8, 8)",
                  color: "white",
                }}
              >
                Question type: {this.state.questions[4].type}
              </i>
            </div>
            {/* <div className="timerAndScore">
            <h1 id="score"></h1>
             <div>
              <h1>
                {moment()
                  .hour(0)
                  .minute(0)
                  .second(this.state.time)
                  .format("HH : mm : ss")}
              </h1>
            </div> 
          </div> */}
          </div>
        </div>

        <div className="questions">
          <div className="timer">
            <h1>
              {moment()
                .hour(0)
                .minute(0)
                .second(this.state.time)
                .format("HH : mm : ss")}
            </h1>
          </div>
          {theQuestion1}
          <br></br>
          <hr></hr>
          {theQuestion2}
          <br></br> <hr></hr>
          {theQuestion3}
          <br></br>
          <hr></hr>
          {theQuestion4}
          <br></br>
          <hr></hr>
          {theQuestion5}
          <br></br>
          <hr></hr>
          <br></br>
          <h4>Quiz Summary</h4>
          <p>Question 1: {this.state.currentAnswers[0].userTfAnswer} </p>
          <p>Question 2: {this.state.currentAnswers[1].userTfAnswer} </p>
          <p>Question 3: {this.state.currentAnswers[2].userAnswer} </p>
          <p>Question 4: {this.state.currentAnswers[3].userAnswer} </p>
          <p>Question 5: {this.state.currentAnswers[4].userAnswer} </p>
          <br></br>
          <button
            onClick={() => this.getAnswers()}
            className="submitButton"
            type="submit"
            style={{
              pointerEvents: this.state.submitUserAnswers ? "none" : "all",
            }}
          >
            {this.state.submitUserAnswers ? "Loading..." : "Submit"}
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
