var express = require('express');
var router = express.Router();
var create = require('.././createEntry');
var retrieve = require('.././retrieveEntry');
var latestTimeSlot;
var candidateRecords = {
  "Ronald Gump" : 0,
  "Billary Hilton": 0,
  "Red Cruz": 0,
  "Boe Jiden": 0,
  "Sernie Banders": 0
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // initiate this only on tap of button
  create(req.query.name, function(latestTimeSlot) {
    console.log("LATEST TIME SLOT = " + latestTimeSlot)
    // call retrieve after second pause

    setTimeout(function() {
      retrieve(latestTimeSlot, function  (candidateName) {
        candidateRecords[candidateName]++
        //console.log("Candidate records = " + candidateRecords)
        // Update div/UI code to reflect changes
      });
    }, 8000);

    /*
    retrieve(latestTimeSlot, function  (candidateName, latestTimeSlot) {
      candidateRecords[candidateName]++
      console.log("Candidate records = " + candidateRecords)
      // Update div/UI code to reflect changes
    });*/
  });

  res.render('index', { title: 'Express' });

});

module.exports = router;
