/**
* Image.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {

    fileName: {
      type: 'string',
      required: true
    },
    fileBaseUrl: {
      type: 'string',
      required: true
    },
    publishState: {
      type: 'string',
      enum: ['pending', 'rated', 'edited', 'denied', 'published'],
      defaultsTo: 'pending'
    },
    caption: {
      type: 'string',
      required: true,
      defaultsTo: Date() + ': ' + "Shot by LivePixel"
    },
    ocassionDescription: {
      type: 'text',
      required: true,
      maxLength: 1500
    },
    cameraID: {
      type: 'string',
      maxLength: 15,
      defaultsTo: 'LP00'
    },
    photographer: {
      type: 'string',
      defaultsTo: 'Brought to you by Livepixel.me',
      maxLength: 48
    },
    eventId: {
      model: 'event',
      required: true
    }


  }
};

