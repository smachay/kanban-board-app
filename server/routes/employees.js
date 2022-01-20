var express = require('express');
var router = express.Router();
var Database = require('../repository/Database');
const AuthService = require('../services/AuthService');

var database = Database.getInstance();

router.get('/', function (req, res) {
  console.log("teamid: ", Object.keys(req.query).length );
  if (Object.keys(req.query).length == 0 ) {
    database.getEmployees(-1, employees => res.send(employees));
  }else{
    database.getEmployees(req.query.teamId, employees => res.send(employees));
  }

});

router.get('/jobs', function (req, res) {
  database.getJobs(jobs => res.send(jobs));
});

router.get('/:id(\\d+)/', function (req, res) {
  database.getEmployee(req.params.id, employee => res.send(employee));
})

router.get('/:id(\\d+)/team', function (req, res) {
  database.getEmployee(req.params.id, employee => {
    database.getEmployees(employee[0].team_id, employees => res.send(employees));
  });
})

router.post('/', function (req, res) {
  const {
    manager_id,
    first_name,
    last_name,
    email,
    password,
    job_id
  } = req.body;
  const newUser = {
    "first_name": first_name,
    "last_name": last_name,
    "email": email,
    "password": password,
    "job_id": job_id
  }
  AuthService.register(manager_id, newUser, resp => res.send(resp));
});

router.put('/', (req, res) => {
  const {
    employee_id,
    job_id,
    team_id
  } = req.body;
  database.updateEmployee(employee_id, job_id, team_id, resp => res.send(resp));
})

router.delete('/', (req, res) => {
  const {
    employee_id,
  } = req.body;
  database.deleteEmployee(employee_id, resp=>res.send(resp));
})

module.exports = router;