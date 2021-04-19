import React from "react";

class Qas extends React.Component {
  

  render() {
    return (
      //questions and answers
      <div className="questions">
        <h1>Frequently Asked Questions</h1>
        <br></br>
        <h4>Is there a time limit on the quiz?</h4>
        <p>
          No. There is no time limit on the quiz. A stopwatch will begin as soon
          as you click the begin button, but there is no time limit. The timer
          is there for your benefit in pacing your assessment.
        </p>
        <br></br>
        <h4>Does the quiz contain the same questions everytime you take it?</h4>
        <p>
          No. The FBLA Quiz was created to randomly generate 5 questions from a
          database of 50 questions.
        </p>
        <br></br>
        <h4>Do I have to fill in every question?</h4>
        <p>
          {" "}
          Yes. In order to submit your quiz, you will need to provide an answer
          for each required field.
        </p>
        <br></br>
        <h4> How do I access and print my reports?</h4>
        <p>
          After you submit your quiz, click reports and there will be a print
          button located on your report page.
        </p>
        <br></br>
        <h4>How can I improve my score? / How can I prepare?</h4>
        <p>
          Check out the offical FBLA page and read through each section of the
          page.
        </p>
        <br></br>
        <h4>Are all of the questions multiple choice? </h4>
        <p>
          No. The FBLA Quiz is created to contain 4 different question types:
          multiple choice, drop down, free response, and true/false.
        </p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Qas;
