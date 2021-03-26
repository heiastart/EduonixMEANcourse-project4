const express = require('express');
const router = express.Router();

// We must require/import this module to access the logic (i.e functions) that will be invoked for the different routes!
var todo_controller = require('../controller/logic');

// Routes for the app on root/todo/<routes from here>
// Route to test the API and this module
router.get('/test', todo_controller.test);

// Fetching all todos on database
router.get('/all', todo_controller.todo_fetch_all);

// Create a new todo entry
router.post('/create', todo_controller.todo_create);

// Fetching specific todo that matches the given id
router.get('/:id', todo_controller.todo_fetch_by_id);

// Update specific todo that matches the given id
router.put('/:id/update', todo_controller.todo_update_by_id);

// Delete specific todo that matches the given id
router.delete('/:id/delete', todo_controller.todo_delete_by_id);


module.exports = router;