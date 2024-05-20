// index.js

const express = require('express');
const app = express();
const port = 3000;
const todosRoutes = require('./routes/todos');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('ToDo List API');
});

app.use('/todos', todosRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
