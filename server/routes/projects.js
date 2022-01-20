var express = require('express');
var router = express.Router();
var Database = require('../repository/Database')

var database = Database.getInstance();

router.get('/', function (req, res) {
  database.getProjects(projects => res.send(projects));
});

router.post('/', (req, res) => {
  const {
    name
  } = req.body;
  database.addProject(name, resp => res.send(resp));
})

router.put('/', (req, res) => {
  const {
    project_id,
    end_date,
    status_id
  } = req.body;
  database.updateProject(project_id, end_date, status_id, resp => res.send(resp));
})

module.exports = router;