const connection = require('../config/db');

const Todo = {
    getAll: (callback) => {
        connection.query('SELECT * FROM todos', callback);
    },
    create: (title, description, due_date, callback) => {
        connection.query('INSERT INTO todos (title, description, due_date) VALUES (?, ?, ?)', [title, description, due_date], callback);
    },
    update: (id, title, description, due_date, callback) => {
        connection.query('UPDATE todos SET title = ?, description = ?, due_date = ? WHERE id = ?', [title, description, due_date, id], callback);
    },
    delete: (id, callback) => {
        connection.query('DELETE FROM todos WHERE id = ?', [id], callback);
    },
    markComplete: (id, callback) => {
        connection.query('UPDATE todos SET completed = 1 WHERE id = ?', [id], callback);
    }
};

module.exports = Todo;
