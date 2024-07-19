const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true, useUnifiedTopology: true });

const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
