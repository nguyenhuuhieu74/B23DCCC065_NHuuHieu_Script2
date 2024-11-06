const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();
const port = 3005;

app.use(bodyParser.json()); 
app.use('/api', todoRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});