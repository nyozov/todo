const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const express = require('express')
const app = express()
const port = 5000

require('dotenv').config();




const uri = process.env.CONNECTION_URL

MongoClient.connect(uri ,
   { useUnifiedTopology: true, useNewUrlParser: true, serverApi: ServerApiVersion.v1},
    (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  const db = client.db('todo')

  app.use(cors());

  app.use(express.json())
  app.get('/', (req, res) => {
    db.collection('tasks').find().toArray()
      .then(tasks => {
        res.json({ tasks: tasks })
      })
      .catch(/* ... */)
  })

})




  
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})