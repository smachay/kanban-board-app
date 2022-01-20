const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
const port = 3001

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employees');
var milestonesRouter = require('./routes/milestones');
var projectsRouter = require('./routes/projects');
var tasksRouter = require('./routes/tasks');
var teamsRouter = require('./routes/teams');
var authRouter = require('./routes/auth');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.use(cors());
app.use('/', indexRouter);
app.use('/employees', employeesRouter);
app.use('/milestones', milestonesRouter);
app.use('/projects', projectsRouter);
app.use('/tasks', tasksRouter);
app.use('/teams', teamsRouter);
app.use('/auth', authRouter);
/*
app.get('/employees', (req, res) => {
    connection.query('SELECT employee_id, first_name, last_name, email FROM employees JOIN jobs on employees.job_id = jobs.job_id', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/jobs', (req, res) => {
    connection.query('SELECT * FROM jobs', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/messages', (req, res) => {
    connection.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/milestones', (req, res) => {
    connection.query('SELECT * FROM milestones', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/milestones/status', (req, res) => {
    connection.query('SELECT * FROM milestones_status', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/notes', (req, res) => {
    connection.query('SELECT * FROM notes', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/projects', (req, res) => {
    connection.query('SELECT * FROM projects', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/projects/status', (req, res) => {
    connection.query('SELECT * FROM project_status', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/tasks', (req, res) => {
    connection.query('SELECT * FROM tasks', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/tasks/employees', (req, res) => {
    connection.query('SELECT * FROM task_employees', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/tasks/status', (req, res) => {
    connection.query('SELECT * FROM task_status', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})

app.get('/teans', (req, res) => {
    connection.query('SELECT * FROM teams', function (error, results, fields) {
        if (error) console.log(error);
        res.send(results);
      });
})
*/