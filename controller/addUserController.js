const User = require("../models/user");

/*
exports.registerpage = function (req, res) {
  res.render("user/register");
};
*/

exports.addUser = [
    (req, res, next) => {
        const {
            u_email,
            u_name,
            u_number,
            u_gender,
        } = req.body;
        let errors = [];

        if (
            !u_email ||
            !u_name ||
            !u_number ||
            !u_gender
        ) {
            errors.push({ msg: "Please enter all fields" });
        }
        else {
            User.findOne({ email: u_email }).then((user) => {
                if (user) {
                    errors.push({ msg: "Email already exists" });
                    res.render("/users/add", {
                        errors,
                        u_email,
                        u_name,
                        u_number,
                        u_gender,
                    });
                } else {
                    const newUser = new User({
                        email: u_email,
                        name: u_name,
                        number: u_number,
                        gender: u_gender,
                    });

                    newUser.save()
                        .then((user) => {
                            res.redirect("/users/add");
                        })
                        .catch((err) => console.log(err));
                }
            })
                .catch((err) => console.log(err));
        }
    }
];
