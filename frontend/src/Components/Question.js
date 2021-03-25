// import React from "react";

// class Question extends React.Component {
//   constructor(props) {
//     super(props);
//     //states for collecting the User input and id of each question
//     this.state = {
//       id: "",
//       userAnswer: "Q: NOT ANSWERED",
//       userTfAnswer: "T/F: NOT ANSWERED",
//     };
//   }

//   handleChangeOfDropDown(id, event) {
//     this.setState({ id: id, userAnswer: event.target.value });
//   }

//   handleWrittenResponse(id, event) {
//     this.setState({ id: id, userAnswer: event.target.value });
//   }

//   //function that uses if/else if statements to determine what state (either userTfAnswer or userAnswer) to pass the user input
//   handleStates(id, usersAnswer) {
//     if (usersAnswer === "FALSE" || usersAnswer === "TRUE") {
//       this.setState({ id: id, userTfAnswer: usersAnswer });
//     } else {
//       this.setState({ id: id, userAnswer: usersAnswer });
//     }
//   }

//   //function to determine how the question will be formatted (True or False, Multiple Choice, Drop Down, Written Response)
//   displayQuestion(type, data) {
//     if (type === "tf") {
//       return (
//         <div>
//           <h4>{data.tfversion}</h4>
//           <button onClick={() => this.handleStates(data._id, "TRUE")}>
//             true
//           </button>
//           <button onClick={() => this.handleStates(data._id, "FALSE")}>
//             false
//           </button>
//         </div>
//       );
//     } else if (type === "mc") {
//       return (
//         <div>
//           <h4>{data.question}</h4>
//           <form>
//             <input
//               type="radio"
//               name="answerChoice"
//               onClick={() => this.handleStates(data._id, data.c1)}
//               id={data.c1}
//               value={data.c1}
//             />
//             <label htmlFor={data.c1}>{data.c1}</label>
//             <br />
//             <input
//               type="radio"
//               name="answerChoice"
//               onClick={() => this.handleStates(data._id, data.c2)}
//               id={data.c2}
//               value={data.c2}
//             />
//             <label htmlFor={data.c2}>{data.c2}</label>
//             <br />
//             <input
//               type="radio"
//               name="answerChoice"
//               onClick={() => this.handleStates(data._id, data.c3)}
//               id={data.c3}
//               value={data.c3}
//             />
//             <label htmlFor={data.c3}>{data.c3}</label>
//             <br />
//             <input
//               type="radio"
//               name="answerChoice"
//               onClick={() => this.handleStates(data._id, data.c4)}
//               id={data.c4}
//               value={data.c4}
//             />
//             <label htmlFor={data.c4}>{data.c4}</label>
//           </form>
//         </div>
//       );
//     } else if (type === "dd") {
//       return (
//         <div>
//           <h4>{data.question}</h4>
//           <select
//             onChange={(event) => this.handleChangeOfDropDown(data._id, event)}
//           >
//             <option value={data.c1}>{data.c1}</option>
//             <option value={data.c2}>{data.c2}</option>
//             <option value={data.c3}>{data.c3}</option>
//             <option value={data.c4}>{data.c4}</option>
//           </select>
//         </div>
//       );
//     } else if (type === "wr") {
//       return (
//         <div>
//           <h4>{data.question}</h4>
//           <form>
//             <p className="typeBelow">Type your answer below.</p>
//             <label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={(event) =>
//                   this.handleWrittenResponse(data._id, event)
//                 }
//               />
//             </label>
//           </form>
//           {/* <form>
//             <label for="writtenResponse">Type your answer below</label>
//             <br />
//             <input type="text" id="writtenResponse" name="writtenResponse" />
//             <br />
//           </form> */}
//         </div>
//       );
//     }
//   }

//   render() {
//     var type = this.props.typeOfQuestion;
//     var data = this.props.questionData;
//     var theQuestion = this.displayQuestion(type, data);
//     return (
//       <div>
//         <div className="questions">
//           {theQuestion}
//           <p> {this.state.userTfAnswer} </p>
//           <p>{this.state.userAnswer}</p>
//           <br></br>
//           <br></br>
//           <hr></hr>
//         </div>
//       </div>
//     );
//   }
// }

// export default Question;
