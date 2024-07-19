const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

router.post('/', async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text
    });
    const todo = await newTodo.save();
    res.json(todo);
});

module.exports = router;
