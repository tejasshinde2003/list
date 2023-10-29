const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
    res.status(201).send('Task added successfully');
  } else {
    res.status(400).send('Bad request');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});