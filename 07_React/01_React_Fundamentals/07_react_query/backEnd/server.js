



const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express()
const port = 8000
const jsonFilePath = './Data/todo.json';

app.use(bodyParser.json());

// Function For Add Deplay
function delayMiddleware(req, res, next) {
    const delayTime = 2000;
    setTimeout(next, delayTime);
}
// Todo Get Api
app.get('/api/todo',(req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        const todos = JSON.parse(data);
        res.json(todos);
    })
});

// Insert New Todo In Json
app.post('/api/createtodo', async (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        const PreviewTodo = JSON.parse(data);
        const NewTodo = req.body;
        PreviewTodo.push(NewTodo);
        fs.writeFile(jsonFilePath, JSON.stringify(PreviewTodo), 'utf8', (err) => {
            if (err) {
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            res.status(201).json(NewTodo);
        });
    });
});

// Update a TODO by ID
// app.put('/api/update/:id', (req, res) => {
//     const todoId = req.params.id;
//     fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//         if (err) {
//             res.status(500).json({ error: 'Internal server error' });
//             return;
//         }
//         let todos = JSON.parse(data);
//         const updatedTodoIndex = todos.findIndex(todo => todo.id === todoId);
//         if (updatedTodoIndex === -1) {
//             res.status(404).json({ error: 'TODO not found' });
//             return;
//         }
//         const updatedTodo = { ...todos[updatedTodoIndex], ...req.body };
//         todos[updatedTodoIndex] = updatedTodo;
//         fs.writeFile(jsonFilePath, JSON.stringify(todos, null, 2), 'utf8', (err) => {
//             if (err) {
//                 res.status(500).json({ error: 'Internal server error' });
//                 return;
//             }
//         })
//         res.status(201).json(updatedTodo);
//     });
// });

// Delete Todo
app.delete('/api/todos/:id', (req, res) => {
    const todoId = req.params.id;
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        let todos = JSON.parse(data);
        const deletedTodoIndex = todos.findIndex(todo => todo.id === todoId);
        if (deletedTodoIndex === -1) {
            res.status(404).json({ error: 'TODO not found' });
            return;
        }
        const deletedTodo = todos.splice(deletedTodoIndex, 1)[0];
        fs.writeFile(jsonFilePath, JSON.stringify(todos, null, 2), 'utf8', (err) => {
            if (err) {
                res.status(500).json({ error: 'Internal server error' });
                return;
            }
            res.json(deletedTodo);
        });
    });
});

// app.get('/api/todo', (req, res) => {
//     const TodoFile = require('./Data/todo.json');
//     res.send(TodoFile)
// })

app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}`)
})