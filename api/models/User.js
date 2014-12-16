/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {
    events: {
      collection: 'event',
      via: 'userId'
    },
    userName: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 18
    },
    email: {
      type: 'string',
      email: true,
      required: true,
      unique: true
    }

  }
};

