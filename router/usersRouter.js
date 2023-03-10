//external imports
const express = require("express");
const { check } = require("express-validator");

//internal imports
const {getUsers, addUser, removeUser} = require("../controller/usersController");
const {checkLogin} = require("../middlewares/common/checkLogin");
const decorateHtmlResponse = require("../middlewares/common/decoreteHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUserValidators, addUserValidationHandler } = require("../middlewares/users/usersValidator");

const router = express.Router();

//users page 
router.get("/", decorateHtmlResponse("Users"), checkLogin, getUsers );

//add users
router.post("/",
    checkLogin,
    avatarUpload, 
    addUserValidators, 
    addUserValidationHandler, 
    addUser,
);

//remove user
router.delete("/:id", removeUser);

module.exports = router;