var express = require('express');
var router = express.Router();
var Database = require('../repository/Database')

var database = Database.getInstance();


router.get('/', function (req, res) {
  database.getTeams(teams=>res.send(teams));
});

router.post('/', (req, res)=>{
  const {
    name,
    team_leader_id
  } = req.body;
  database.createTeam(name, team_leader_id, resp=>res.send(resp));
})

module.exports = router;