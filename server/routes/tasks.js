var express = require('express');
var router = express.Router();
var Database = require('../repository/Database')

var database = Database.getInstance();

router.get('/', function (req, res) {
  if (Object.keys(req.query).length != 0) {
    database.getTasks(req.query.milestoneId, tasks => res.send(tasks));
  } else {
    res.send(403);
  }
});

router.post('/', (req, res)=>{
  const {name, milestone_id} = req.body;
  database.addTask(name, milestone_id, result=>res.send(result));
})

router.put('/', (req, res)=>{
  const {task_id, status_id, programmer_id, tester_id, note} = req.body;
  database.updateTask(task_id, status_id, programmer_id, tester_id, note);
  res.send(200)
})

module.exports = router;