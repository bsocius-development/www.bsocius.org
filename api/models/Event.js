/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    tagLine: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'text',
      required: true,
    },
    startDate: {
      type: 'date',
    },
    endDate: {
      type: 'date'
    },
    images: {
      collection: 'image',
      via: 'eventId'
    },
    userId: {
      model: 'user',
      required: true
    }

  }
};

