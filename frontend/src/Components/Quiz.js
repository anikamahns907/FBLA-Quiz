import React from "react";
import axios from "axios";
import Question from "./Question";

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
  //before the get request:::
  //what is the type of this.state.questions: An array of dictionaries
  //this.state.questions[0]: {question: ""} type: dictionary
  //this.state.questions[3]: { question: "" } type: dictionary
  //this.state.questions[0].question: ""
  //this.state.questions[2].question: ""
  //this.state.questions[1].c1: null (if printed error crashed)
  //this.state.questions[3].tfquestion: null (if printed error crashed)

  //after a succesfull get request:::
  //   this.state.questions is now equal to this
  //   [
  //     {
  //         "_id": "6046e8834c79880b6cf56834",
  //         "question": "How many administrative regions is FBLA-PBL divided into?",
  //         "tfversion": "FBLA-PBL is divided into 2 regions.",
  //         "c1": 5,
  //         "c2": 2,
  //         "c3": 8,
  //         "c4": 4
  //     },
  //     {
  //         "_id": "6046e8834c79880b6cf56826",
  //         "question": "When is National FBLA-PBL Week?",
  //         "tfversion": "National FBLA-PBL Week is held during February 14-20, 2021",
  //         "c1": "March 4-11, 2021",
  //         "c2": "February 14-20, 2021",
  //         "c3": "August 21-28, 2021",
  //         "c4": "November 20-27, 2021"
  //     },
  //     {
  //         "_id": "6046e8834c79880b6cf56842",
  //         "question": "How are ties in objective tests broken?",
  //         "tfversion": "Ties in objective tests are broken by comparing the correct number of answers to the last 10 questions on the exam.",
  //         "c1": "Ties in objective tests are broken by comparing the correct number of answers to the first 10 questions on the exam.",
  //         "c2": "Ties in objective tests are broken by comparing the correct number of answers to the last question on the exam.",
  //         "c3": "Ties in objective tests are broken by comparing the correct number of answers to the first question on the exam.",
  //         "c4": "Ties are not broken; there will be two winners."
  //     },
  //     {
  //         "_id": "6046e8834c79880b6cf56825",
  //         "question": "How many chapters does the High School Division of FBLA-PBL obtain?",
  //         "tfversion": "The High School Division of FBLA-PBL obtains around 1,570+ chapters?",
  //         "c1": "around 5,200+ chapters",
  //         "c2": "around 1,530+ chapters",
  //         "c3": "around 1,570+ chapters",
  //         "c4": "around 6,930+ chapters"
  //     },
  //     {
  //         "_id": "6046e8834c79880b6cf56845",
  //         "question": "How many times can a member of a team who has competed in the same event at one previous NLC compete in the same event at the NLC?",
  //         "tfversion": "A competitor of a team who has competed in the same event at one previous NLC can compete in the event at the national level twice.",
  //         "c1": "twice",
  //         "c2": "three times",
  //         "c3": "six times",
  //         "c4": "only once"
  //     }
  // ]

  //what is the type of this.state.questions now?: Array of dictionaries
  //this.state.questions[0]: type: dictionary
  //     {
  //         "_id": "6046e8834c79880b6cf56834",
  //         "question": "How many administrative regions is FBLA-PBL divided into?",
  //         "tfversion": "FBLA-PBL is divided into 2 regions.",
  //         "c1": 5,
  //         "c2": 2,
  //         "c3": 8,
  //         "c4": 4
  //     }
  //this.state.questions[0].question: "How many administrative regions is FBLA-PBL divided into?"
  //this.state.questions[3].tfquestion: null (crash bc tfquestion not in dictionary)
  //this.state.questions[3].tfversion:  "The High School Division of FBLA-PBL obtains around 1,570+ chapters?"
  //this.state.questions[3].tfversionn: null (crash bc tfversionn not in dictionary)

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

  render() {
    return (
      <div className="content">
        <button className="button" onClick={() => this.getQuestion()}>
          Start when you are ready!
        </button>

        <Question questionData={this.state.questions[0]} typeOfQuestion="tf" />
        <Question questionData={this.state.questions[1]} typeOfQuestion="mc" />
        <Question questionData={this.state.questions[2]} typeOfQuestion="mc" />
        <Question questionData={this.state.questions[3]} typeOfQuestion="dd" />
        <Question questionData={this.state.questions[4]} typeOfQuestion="wr" />
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
