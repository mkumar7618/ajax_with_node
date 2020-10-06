const User = require("../models/user");


/* function for js ajax get test */
exports.user_js_get = function (req, res, next) {
    User.find({}, 'id name')
        .exec(function (err, data) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.render("user_js_get", {
                title: "User",
                users: data,
            });

        });
}

/* function for js ajax post test */
exports.user_js_post = function (req, res, next) {
    User.find({}, 'id name')
        .exec(function (err, data) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.render("user_js_post", {
                title: "User",
                users: data,
            });

        });
}

// for jQuery

/* function for jquery ajax get test */
exports.user_jquery_get = function (req, res, next) {
    User.find({}, 'id name')
        .exec(function (err, data) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.render("user_jquery_get", {
                title: "User",
                users: data,
            });

        });
}

/* function for jquery ajax post test */
exports.user_jquery_post = function (req, res, next) {
    User.find({}, 'id name')
        .exec(function (err, data) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.render("user_jquery_post", {
                title: "User",
                users: data,
            });

        });
}


/* user data for get requet */
exports.userDataGet = function (req, res, next) {
    User.findById(req.query.id)
        .exec(function (err, data) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            console.log("Data:" + data);
            res.send('Data:::' + data);

        });
}

/* user data for post requet */
exports.userDataPost = function (req, res, next) {
    User.findById(req.body.id)
        .exec(function (err, data) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            console.log("Data:" + data);
            res.send('Data:::' + data);

        });
}


/* function for showing adduser form */
exports.addform = function (req, res, next) {
    res.render('addform');
}
