const Todo = require('../models/todo');

const getTodos = (req, res) => {
    Todo.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

const addTodo = (req, res) => {
    const { title, description, due_date } = req.body;
    Todo.create(title, description, due_date, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ id: results.insertId, title, description, due_date });
    });
};

const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description, due_date } = req.body;
    Todo.update(id, title, description, due_date, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ id, title, description, due_date });
    });
};

const deleteTodo = (req, res) => {
    const { id } = req.params;
    Todo.delete(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(204).send();
    });
};

const markComplete = (req, res) => {
    const { id } = req.params;
    Todo.markComplete(id, (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(204).send();
    });
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo, markComplete };
