var Database = require('../repository/Database')

var database = Database.getInstance();

class AuthService {

  static login(login, password, callback) {
    return database.getUser(login, password, callback);
  }

  static register(manager_id, newUser, callback) {
    return database.addUser(manager_id, newUser, callback);
  }

  static changePassword(login, old_password, new_password, callback){
    AuthService.login(login, old_password, (user)=>{
      if(user.employee_id == -1){
        callback("old password incorrect");
      }else{
        return database.changePassword(user.employee_id, new_password, callback);
      }
    })
  }
}

module.exports = AuthService;