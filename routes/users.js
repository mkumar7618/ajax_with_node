var express = require('express');
var router = express.Router();
const addUserController = require('../controller/addUserController');
const UserDataController = require('../controller/userDataController');
const User = require("../models/user");


/* function for displaying user details by js ajax get request */
router.get('/js_get', UserDataController.user_js_get);

/* function for displaying user details by js ajax post request */
router.get('/js_post', UserDataController.user_js_post);

/* function for displaying user details by jQuery ajax get request */
router.get('/jQuery_get', UserDataController.user_jquery_get);

/* function for displaying user details by jQuery ajax post request */
router.get('/jQuery_post', UserDataController.user_jquery_post);


/* GET user data */
router.get('/userDataGet', UserDataController.userDataGet);

/* post user data */
router.post('/userDataPost', UserDataController.userDataPost);


/* Showing add user form */
router.get('/add', UserDataController.addform);

/* POST add user */
router.post('/add', addUserController.addUser);

module.exports = router;
