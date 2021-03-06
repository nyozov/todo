const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;

require("dotenv").config();

const uri = process.env.CONNECTION_URL;

MongoClient.connect(
  uri,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverApi: ServerApiVersion.v1,
  },
  (err, client) => {
    if (err) return console.error(err);
    console.log("Connected to Database");
    const db = client.db("todo");
    const tasksCollection = db.collection("tasks");

    app.use(cors());

    app.use(express.json());
    app.get("/", (req, res) => {
      tasksCollection
        .find()
        .toArray()
        .then((tasks) => {
          res.json(tasks);
        })
        .catch(/* ... */);
    });

    app.post("/tasks", (req, res) => {
      tasksCollection
        .insertOne(req.body)
        .then((result) => {
          res.send(result);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    app.delete("/tasks", (req, res) => {
      console.log(req.body.taskId);
      tasksCollection.deleteOne({ _id: ObjectId(req.body.taskId.toString()) });
    });

    app.put("/task", (req, res) => {
      console.log('update =', req.body)
    })


  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
