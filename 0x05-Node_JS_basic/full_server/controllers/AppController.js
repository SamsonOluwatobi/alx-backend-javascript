/**
 * Contains the miscellaneous route handlers.
 * @author Samson Oluwatobi <https://github.com/Samsonoluwatobi>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;