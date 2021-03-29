const ToDo = require('../models/todo');


exports.test = (req, res) => {
  res.send('API/routes and logic modules are working!!');
}

exports.todo_fetch_all = (req, res) => {
  ToDo.find((err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.todo_create = (req, res) => {
  var toDo = new ToDo({
    title: req.body.title,
    dueByDate: req.body.dueByDate,
    createdOn: req.body.createdOn,
    status: req.body.status,
    active: req.body.active,
    username: req.body.username
  });

  toDo.save(err => {
    if (err) return next(err);
    res.send('ToDo entry saved successfully');
  })
}

exports.todo_fetch_by_id = (req, res) => {
  ToDo.findById(req.params.id, (err, items) => {
    if (err) return next(err);
    res.send(items);
  })
}

exports.todo_update_by_id = (req, res) => {
  ToDo.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, items) => {
    if (err) return next(err);
    res.send('ToDo with ID ' + req.params.id + ' updated successfully!\n' + items);
  })
}

exports.todo_delete_by_id = (req, res) => {
  ToDo.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('ToDo deleted successfully');
  })
}