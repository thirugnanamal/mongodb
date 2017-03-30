'use strict';

module.exports = function (app) {
  // User Routes
  var users = require('../Controller/server.controller');

  // Setting up the users profile api
  app.route('/api/Register').post(users.Register);
  app.route('/api/Login').post(users.Login);
  app.route('/api/Delete').put(users.DeleteDetails);
  app.route('/api/upDateDetails').put(users.UpdateDetails);
};
