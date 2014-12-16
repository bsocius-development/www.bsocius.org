/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function(request, response) {
    response.locals.layout = 'aboutlayout';
    return response.view();
  }
	
};

