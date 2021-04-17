# FBLA Five Question Quiz

#### Description

FBLA Quiz is an interactive user interface that enables users to advance their knowledge about FBLA through the completion of a 5 question quiz. 
The five questions are randomly generated from a NoSQL database obtaining fifty collections.
Once all required fields are filled, the user can submit the quiz, and a report page will display indicating a score, time, and all five questions answered along with the user’s answers and the correct answer choices. 
The user is able to customize and analyze their reports through report settings that allows users to toggle question type, enter their name, and print their reports. 
The site has three components: Home, Quiz, and QAS.
- Overall, applications and selections were made based on scalability, affordability, popularity, run-time, and speed.


#### Applications and Programs

- [Mongo DB](https://www.mongodb.com/2) - used to hold cluster containing database that contains the fifty collections

- [React.JS](https://reactjs.org/) - used to create the functionality of the quiz through states and components

- [AWS Lambda](https://aws.amazon.com/lambda/) - used as backend service that creates connection to Mongo DB for collections

- [Postman](https://www.postman.com/) - used to test out HTTP (GET and POST) requests

- [Amazon API Gateway](https://aws.amazon.com/api-gateway/) - used to support HTTP methods and call AWS Lambda

- [Virtual Studio Code](https://code.visualstudio.com/) - used to create frontend

- [Windows Paint](https://support.microsoft.com/en-us/windows/get-microsoft-paint-a6b9578c-ed1c-5b09-0699-4ed8115f9aa9) - used to design website and tab icon

- [Prettier.io](https://prettier.io/) - used to format code in VS code

- [Node.js](https://nodejs.org/en/) - used to code backend

#### Identifiers used for variables, constants, arrays, objects, etc. 
- HTML, JavaScript, CSS (languages) are **case sensitive**.

- Four react states (objects)  incorporate arrays of dictionaries with appropriate names.

- CSS selector proceeds dot (.) when individual HTML elements hold specific **CSS classNames**.

- All react components and files are formatted with **PascalCase**.

- Methods and variables use **camelCase**.

## BACKEND
- API Gateway -> AWS Lambda (FAAS) -> Mongo DB  (non-relational NoSQl - not only structured query language)

The backend was build through google sheets and was then imported into MongoDB. In Mongo DB, a cluster of the database contained fifty collections which had the question, type, choices, and answer. A connection was then made between AWS Lambda. AWS Lambda is a FAAS (function as a service) meaning that the provider manages the majority of its operations. An API Gateway was then created to communicate HTTP methods from the client and the other backend services.The API Gateway calls the AWS Lambda through the use of a handler() function.  The code enabled the random generation of 5 collections.  The backend was written with Node.js. 


## Frontend
Only two HTTP methods were implemented into this website: GET and POST. The GET request was made through a axios.get() function that requested everything in the collections of the five randomly generated questions except the answers. The POST request was created through the axios.post() functon that passed the IDs of questions in order to get the right question to grade. 
- React.js is a frontend library that enables interactive and dynamic UI through the division of components and the use of states. Three components were created: Home, Quiz, and QAS. The states object became increasingly useful throughout this project due to the changing of questions, answers, choices, and types. Several of the states are arrays of dictionaries so that it can obtain the information of 5 questions. States changed through the this.setState() function. Several times throughout the code, onClick (in HTML) calls a function that implements the set state function. React makes use of virtual DOM (document object model) to speed up rendering processes. React.JS has increasingly grown in popularity and was actually created by a Facebook software engineer. 

- Languages: The majority of this code consists of javascript. Through javascript I was able to create if / else if / else statements. These statements became extremely useful when calculating scores and setting states as user answer input. Ternary operators were also used a couple of times to reduce complexion. In HTML, many divs and tags (<h1/>, <p/>, etc.) were created to manage designing. Tags included classNames that equaled CSS elements written in the CSS file. 

- Code editor: Virtual Studio code and prettier.io were used to create the frontend. Virtual Studio code enables the use of many features including the installation of various npm packages. Prettier.io formats code when code is saved; as many may guess, it makes code "prettier".






#####  NPM Packages Installed
Npm packages advanced the designing process. Npm packages for react and API Gateway were also installed.

Particle design ( npm i react-particles-js)
https://www.npmjs.com/package/react-particles-js

Axios NPM for HTTP GET and POST requests. (npm i axios)
https://www.npmjs.com/package/axios/v/0.21.1

Timer (import \* as moment from "moment")
https://www.npmjs.com/package/moment

Confetti (npm i react-confetti)
https://www.npmjs.com/package/react-confetti

Printable Report (npm i react-to-print)
https://www.npmjs.com/package/react-to-print
