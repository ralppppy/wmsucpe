const Sequelize = require("sequelize")
const db = require("../config/database")

const User = db.define("users", {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
   },

   email: {
      type: Sequelize.STRING,
      allowNull: false
   },

   password: {
      type: Sequelize.STRING,
      allowNull: false
   },

   userName: {
      type: Sequelize.STRING,
      allowNull: false
   },

   company: {
      type: Sequelize.STRING,
      allowNull: false
   },

   firstName: {
      type: Sequelize.STRING,
      allowNull: false
   },

   lastName: {
      type: Sequelize.STRING,
      allowNull: false
   },

   active: {
      type: Sequelize.BOOLEAN,
      allowNull: false
   },

   createdAt: {
      type: Sequelize.DATE,
      allowNull: false
   },
   updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
   }
})

module.exports = User
