var User = require("../models/user");
var validator = require("express-validator");
var bcrypt = require("bcrypt");

exports.admin_register_post = [
    validator
      .body("f_name", "First Name should have min 2 and max 20 characters")
      .trim()
      .isLength({ min: 2, max: 20 }),
    validator
      .body("l_name", "Last Name should have min 2 and max 20 characters")
      .trim()
      .isLength({ min: 2, max: 20 }),
    validator
      .body("username", "Username should have min 5 and max 20 characters")
      .trim()
      .isLength({ min: 5, max: 20 })
      .isAlphanumeric()
      .withMessage("Only Alpha numeric charcaters allowed in username"),
    validator.body("dob", "Invalid date").trim().isISO8601(),
    validator
      .body("password", "password length min 8 and max 15")
      .trim()
      .isLength({ min: 8, max: 15 }),
    validator.body("email", "Invalid Email").trim().isEmail(),
    validator
      .body("mobile", "Invalid Mobile")
      .trim()
      .isLength({ min: 10, max: 10 }),
  
    validator.sanitizeBody("f_name").escape(),
    validator.sanitizeBody("l_name").escape(),
    validator.sanitizeBody("mobile").escape(),
    validator.sanitizeBody("username").escape(),
  
    (req, res) => {
      const errors = validator.validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          saved: "unsuccessful",
          errors: errors.array(),
        });
        return;
      }
  
      User.find({ email: req.body.email }, "email").exec(async (err, email) => {
        if (err) {
          throw err;
        }
        if (email.length) {
          res.json({
            saved: "unsuccessful",
            error: { msg: "Email already exists" },
          });
          return;
        } else {
          var salt = await bcrypt.genSalt(10);
          var password = await bcrypt.hash(req.body.password, salt);
  
          var user = new User({
            f_name: req.body.f_name,
            l_name: req.body.l_name,
            dob: req.body.dob,
            mobile: req.body.mobile,
            username: req.body.username,
            password: password,
            gender: req.body.gender,
            email: req.body.email,
            trains_booked: [],
            admin: true,
          });
  
          await user.save((err) => {
            if (err) {
              throw err;
            }
  
            res.status(200).json({ saved: "success" });
          });
        }
      });
    },
  ];