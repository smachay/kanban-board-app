let mysql = require('mysql2');

class Database {
    static #repository;

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'qwerty',
            database: 'mydb'
        });
        this.connection.connect();
    }

    static getInstance() {
        if (Database.#repository == undefined) Database.#repository = new Database();
        return Database.#repository;
    }

    getEmployees(teamId, callback) {
        let query = 'SELECT employee_id, first_name, last_name, email, job_title, employees.job_id, team_id FROM employees JOIN jobs on employees.job_id = jobs.job_id';
        if (teamId != -1) query += (' WHERE employees.team_id = ' + teamId);
        return this.connection.query(query, function (error, results, fields) {
            if (error) console.log(error);
            console.log(callback);
            callback(results);
        });
    }

    getEmployee(id, callback) {
        return this.connection.query('SELECT employee_id, first_name, last_name, email, job_id, team_id FROM employees WHERE employee_id = ' + id, function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    deleteEmployee(employee_id, callback){
        let query = 'DELETE FROM employees WHERE employee_id = ' + employee_id;
        return this.connection.query(query, function (error, results, fields) {
            if (error) console.log(error);
            console.log(callback);
            callback(results);
        });
    }

    getJobs(callback) {
        this.connection.query('SELECT * FROM jobs', function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    getUser(email, password, callback) {
        this.connection.query("SELECT employee_id FROM employees WHERE email = '" + email + "' AND password = '" + password + "'",
            function (error, results) {
                /*if (results == undefined) {
                    callback(JSON.parse('{"employee_id":-1}'));
                    return;
                }*/
                callback(results[0]);
            }
        );
    }

    addUser(manager_id, newUser, callback) {
        this.connection.query("INSERT INTO employees (first_name, last_name, email, password, job_id) values ('" + newUser.first_name + "', ' " +
            newUser.last_name + "', '" + newUser.email + "', '" + newUser.password + "', " + newUser.job_id + ")",
            function (error, results) {
                callback(results);
            })
    }

    changePassword(user_id, new_password, callback) {
        const query = "UPDATE employees SET password = '" + new_password + "' WHERE employee_id like " + user_id;
        console.log(query)
        this.connection.query(query, (error, results, fields) => {
            callback(results);
        })
    }

    getAllMilestones(callback) {
        this.connection.query('SELECT m.*, p.name AS "project_name", t.name AS "team_name" FROM milestones m LEFT JOIN projects p ON m.project_id = p.project_id LEFT JOIN teams t ON t.team_id = m.team_id', function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    getMilestones(teamId, callback) {
        this.connection.query('SELECT m.*, p.name AS "project_name" FROM milestones m LEFT JOIN projects p ON m.project_id = p.project_id WHERE m.team_id=' + teamId, function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    getStatus(milestoneId, callback) {
        return this.connection.query('SELECT s.status FROM milestones m JOIN milestones_status s on m.status_id = s.status_id WHERE m.milestone_id = ' + milestoneId, function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    addMilestone(name, projectId, callback) {
        console.log("INSERT INTO milestones (name, project_id) VALUES ('" + name + "', " + projectId + ")")
        this.connection.query("INSERT INTO milestones (name, project_id) VALUES ('" + name + "', " + projectId + ")",
            function (error, results) {
                callback(results);
            })
    }

    updateMilestone(milestone_id, status_id, project_id, team_id, callback) {
        let query = "UPDATE milestones SET ";
        if (status_id != undefined) query += "status_id = " + status_id + ",";
        if (project_id != undefined) query += "project_id = " + project_id + ",";
        if (team_id != undefined) query += "team_id = " + team_id + ",";
        query = query.slice(0, -1);
        query += " WHERE milestone_id = " + milestone_id;
        this.connection.query(query, (error, results, fields) => {
            callback(results);
        })
    }

    getProjects(callback) {
        return this.connection.query('SELECT p.*, s.status, p.name as project_name FROM projects p JOIN project_status s ON p.status_id = s.status_id', function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    addProject(name, callback) {
        console.log("INSERT INTO projects (name, start_date) VALUES ('" + name + "', '" + (new Date()).toISOString().substring(0, 10) + "')");
        this.connection.query("INSERT INTO projects (name, start_date, status_id) VALUES ('" + name + "', '" + (new Date()).toISOString().substring(0, 10) + "', 1)",
            function (error, results) {
                callback(results);
            })
    }

    updateProject(project_id, end_date, status_id, callback) {
        let query = "UPDATE projects SET ";
        if(end_date == -1){
            end_date = "NULL"
        }else{
            end_date = "'" + end_date + "'"
        }
        if (status_id != undefined) query += "status_id = " + status_id + ",";
        if (end_date != undefined) query += "end_date = " + end_date + ",";
        query = query.slice(0, -1);
        query += " WHERE project_id = " + project_id;
        this.connection.query(query, (error, results, fields) => {
            callback(results);
        })
    }

    updateEmployee(employee_id, job_id, team_id, callback) {
        let query = "UPDATE employees SET ";
        if (job_id == -1) job_id = "NULL";
        if (team_id == -1) team_id = "NULL";
        if (job_id != undefined) query += "job_id = " + job_id + ",";
        if (team_id != undefined) query += "team_id = " + team_id + ",";
        query = query.slice(0, -1);
        query += " WHERE employee_id = " + employee_id;
        console.log(query)
        this.connection.query(query, (error, results, fields) => {
            callback(results);
        })
    }

    getTasks(milestoneId, callback) {
        let query = "SELECT task.task_id, task.name, s.status, p.employee_id AS 'Programista', t.employee_id AS 'Tester', n.note FROM tasks task " +
            "LEFT JOIN task_status s on task.status_id = s.status_id " +
            "LEFT JOIN (SELECT * FROM task_employees WHERE employee_id IN (SELECT employee_id FROM employees WHERE job_id=3 OR job_id=2)) p ON task.task_id = p.task_id " +
            "LEFT JOIN (SELECT * FROM task_employees WHERE employee_id IN (SELECT employee_id FROM employees WHERE job_id=4)) t ON task.task_id = t.task_id " +
            "LEFT JOIN notes n ON task.task_id = n.task_id " +
            "WHERE task.milestone_id = " + milestoneId;
        console.log(query)
        this.connection.query(query, (error, results, fields) => {
            callback(results);
        })
    }

    getTeams(callback) {
        this.connection.query('SELECT * FROM teams', function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    createTeam(name, team_leader_id, callback) {
        this.connection.query("INSERT INTO teams(team_leader_id, name) values (" + team_leader_id + ", '" + name + "')", function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    updateTeam(team_id, team_leader_id, callback) {
        this.connection.query('UPDATE teams SET team_leader_id = ' + team_leader_id + ' WHERE team_id = ' + team_id, function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    addTask(name, milestone_id, callback) {
        this.connection.query("INSERT INTO tasks(name, status_id, milestone_id) values ('" + name + "', 1, " + milestone_id + ")", function (error, results, fields) {
            if (error) console.log(error);
            callback(results);
        });
    }

    updateTask(task_id, status_id, programmer_id, tester_id, note) {
        if (status_id != undefined) {
            let query = "UPDATE tasks SET status_id = " + status_id + " WHERE task_id = " + task_id;
            this.connection.query(query, (error, results, fields) => {})
        }
        let query = "SELECT e.id, e.employee_id, j.job_id from task_employees e left join employees j on e.employee_id = j.employee_id where task_id = " + task_id;
        this.connection.query(query, (error, results, fields) => {
            let programmer, tester;
            results.forEach(element => {
                if (element.job_id == 3) programmer = element
                if (element.job_id == 4) tester = element
            });
            if (programmer_id != undefined) {
                if (programmer_id == -1) {
                    if (programmer != undefined){
                        let query = "DELETE FROM task_employees WHERE id = " + programmer.id;
                        this.connection.query(query, (error, results, fields) => {});
                    } 
                } else if (programmer == undefined) {
                    let query = "INSERT INTO task_employees(task_id, employee_id) VALUES(" + task_id + ", " + programmer_id + ")";
                    this.connection.query(query, (error, results, fields) => {});
                } else {
                    let query = "UPDATE task_employees SET employee_id = " + programmer_id + " WHERE id = " + programmer.id;
                    this.connection.query(query, (error, results, fields) => {});
                }
            }
            if (tester_id != undefined) {
                if (tester_id == -1) {
                    if (tester != undefined){
                    let query = "DELETE FROM task_employees WHERE id = " + tester.id;
                    this.connection.query(query, (error, results, fields) => {});
                    }
                } else if (tester == undefined) {
                    let query = "INSERT INTO task_employees(task_id, employee_id) VALUES(" + task_id + ", " + tester_id + ")";
                    this.connection.query(query, (error, results, fields) => {});
                } else {
                    let query = "UPDATE task_employees SET employee_id = " + tester_id + " WHERE id = " + tester.id;
                    console.log(query)
                    this.connection.query(query, (error, results, fields) => {});
                }
            }
            if(note != undefined){
                let query = "DELETE FROM notes where task_id = " + task_id;
                this.connection.query(query, (error, results, fields) => {
                    if(note != -1){
                    query = "INSERT INTO notes(note, task_id) VALUES('" + note + "', " + task_id + ")";
                    this.connection.query(query, (error, results, fields) => {});
                }
                });
            }

        })
    }
}

module.exports = Database;