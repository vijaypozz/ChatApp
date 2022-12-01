const express = require("express");

const router = express.Router();
const user = require("../controllers/user.controllers")


// const {authorizeRoles} = require("../middlewares/auth")

router.route("/usersDetail").get(user.getUser)
router.route("/usersDetail/:user_name").put(user.updateMessage)



module.exports = router;
