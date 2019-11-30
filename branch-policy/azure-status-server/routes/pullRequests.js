var express = require('express');
var router = express.Router();

const db = {
  'created': [],
  'updated': []
};

router.get('/', function(req, res, next) {
  res.send(db);
});
router.post('/webhooks/created', function(request, response, next) {
  const reponseBody = {
    message: "Pull request is created",
    data: request.body
  };
  db.created.push(request.body);
  response.send(reponseBody);
});

router.post('/webhooks/updated', function(request, response, next) {
  const reponseBody = {
    message: "Pull request is updated",
    data: request.body
  };
  db.updated.push(request.body);
  response.send(reponseBody);
});


module.exports = router;
