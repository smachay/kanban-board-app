var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var Database = require('../repository/Database')

var database = Database.getInstance();

router.get('/', function (req, res) {
  if (Object.keys(req.query).length != 0) {
    if(req.query.userId != undefined){
      database.getEmployee(req.query.userId, user => {
          database.getMilestones(user[0].team_id, x=>res.send(x))
          })
    }else{
      database.getMilestones(req.query.teamId, milestones => res.send(milestones));
    }
   
  } else {
    res.send(403);
  }
});

router.get('/', function (req, res) {
  if (Object.keys(req.query).length != 0) {
    database.getEmployee(req.query.userId, user => {
      res.send(
      //  database.getMilestones(user[0].team_id, x=>res.send(x))

      user
        )
    });
  } else {
    res.send(403);
  }
});

router.get('/:milestoneId(\\d+)/status', function (req, res) {
  database.getStatus(req.params.milestoneId, status => res.send(status));
});

router.post('/', (req, res) => {
  const {
    name
  } = req.body;
  database.addMilestone(name, resp => res.send(resp));
})

router.put('/', (req, res) => {
  const {
    milestone_id,
    status_id,
    project_id,
    team_id
  } = req.body;
  database.updateMilestone(milestone_id, status_id, project_id, team_id, resp => res.send(resp));
})

router.get('/:milestoneId(\\d+)/tasks', (req, res)=>{
  database.getTasks(req.params.milestoneId, tasks=>res.send(tasks));
});


module.exports = router;