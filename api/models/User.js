/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {

    email: {
      type: 'string',
      email: true,
      required: true,
    }

  },

  afterCreate: function(values, next) {

    console.log("Called beforeCreate User ");
    console.log(values);

    //This checks to make sure the password and password confirmation match before creating the record
    next();
    }

};

