/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  create: function (request, response, next) {
    User.create (request.params.all(), function userCreated (err, user) {
      //when there is an error
      if(err) return next(err);

      return response.redirect('/');
    })

  }
};


