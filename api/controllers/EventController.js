'use strict';

module.exports = {
  index: function(request, response) {
    Event
      .find()
      .limit(5)
      .exec(function callback(error, event) {
        if (error) {
          return response.negotiate(error);
        }
        response.view({
          event: event
        });
      });
  }
};

