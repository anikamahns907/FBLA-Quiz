# FBLA Five Question Quiz

#### Description

FBLA Quiz is an interactive user interface that enables users to advance their knowledge about FBLA through the completion of a 5 question quiz. 
The five questions are randomly generated from a NoSQL database obtaining fifty collections.
Once all required fields are filled, the user can submit the quiz, and a report page will display indicating a score, time, and all five questions answered along with the user’s answers and the correct answer choices. 
The user is able to customize and analyze their reports through report settings that allows users to toggle question type, enter their name, and print their reports. 
The site has three components: Home, Quiz, and QAS.


##### Languages
- JavaScript
- CSS
- HTML

#### Applications and Programs

- Mongo DB

- React.JS

- AWS Lambda

- Postman

- Amazon API Gateway

- Virtual Studio Code

- Windows Paint

- Prettier

- Node.js

#### Identifiers used for variables, constants, arrays, objects, etc. 
- HTML, JavaScript, CSS (languages) are **case sensitive**.

- Four react states (objects)  incorporate arrays of dictionaries with appropriate names.

- CSS selector proceeds dot (.) when individual HTML elements hold specific **CSS classNames**.

- All react components and files are formatted with **PascalCase**.

- Methods and variables use **camelCase**.

## BACKEND
- API Gateway -> AWS Lambda (FAAS) -> Mongo DB (non-relational NoSQl - not only structured query language)

The backend was build 

API Gateway
- The API gateway acts as a communicator between the client and backend services. API Gateway supports HTTP methods. 
In respect to FBLA Quiz, only two HTTP requests are made: GET request (to get all collections excluding the answers) and POST request (sends IDs of questions)





##### DataBase

- Database was created and imported into Mongo DB and then a connection to AWS Lambda was made. From there, the API Gateway calls the AWS Lambda through a handler function.

##### Other Npm Packages Downloaded

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
