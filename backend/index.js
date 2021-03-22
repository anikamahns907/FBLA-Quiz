"use strict";
const MongoClient = require("mongodb").MongoClient;

const mongouri =
  "mongodb+srv://adminanika:adminanika@cluster0.dymfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //key to mongodb
const dbName = "questionsDB";
const collectionName = "questions";

exports.handler = async (event) => {
  var httpMethod = event.httpMethod;
  const client = new MongoClient(mongouri); // makes connection to c;uster
  await client.connect(); //actually connects to cluster
  const db = client.db(dbName); //goes into databse
  const col = db.collection(collectionName);
  var output;

  if (httpMethod == "GET") {
    output = await col
      .aggregate([{ $sample: { size: 5 } }])
      .project({ answer: 0 })
      .toArray();
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(output),
  };
  return response;

  //cluster>> database >>collection
};
