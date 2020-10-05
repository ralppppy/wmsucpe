const db = require("../config/mongodb");

const User = db.model(
  "Users",
  {
    email: String,
    password: String,
    userName: String,
    firstName: String,
    lastName: String,
    middleName: String,
    active: Boolean,
  },
  { timestamps: true }
);

module.exports = User;
