const express = require('express');
const app = express();
const port = 3001;

// Import the todos router
const todosRouter = require('./src/routers/todos');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the todos router for requests to /todos
app.use('/todos', todosRouter);

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
