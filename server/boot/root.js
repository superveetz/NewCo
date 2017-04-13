'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  
  router.get('/', function (req, res) {
    res.render('index', {
      pageTitle: 'Loopback Test'
    });
  });
  
  server.use(router);
};
