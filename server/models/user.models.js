const sql = require("./db")

const Activity = function (Activity) {
  this.id = User.id
  this.name = User.name
  this.email = User.email
  this.password = User.password
}

//get All users
Activity.getAllUser = () => {
  let query = `SELECT * FROM activity`;
  return new Promise(function (resolve, reject) {
    sql.query(query, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
      return
    })
  }
  )
}


Activity.updateUserMessgae = (data,id) => {
  let query = `UPDATE activity SET ? WHERE id = ?`;
  return new Promise(function (resolve, reject) {
    sql.query(query, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
      return
    })
  }
  )
}

module.exports = Activity