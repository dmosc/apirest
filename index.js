const express = require("express");
const cors = require("cors");
const {loadDDLQueries, getDatabase} = require("./database");

loadDDLQueries();

const app = express();
app.use(cors());

app.get('/categories', (_, res) => {
  const database = getDatabase();
  database.query('SELECT * FROM category', (error, rows) => {
    if (error) res.status(400).json(error);
    res.status(200).json(rows);
  });
});

app.listen(4000, () => console.log('Listening on port 4000'));