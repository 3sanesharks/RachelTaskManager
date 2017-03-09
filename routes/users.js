/**
 * Created by Rachel on 3/9/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.send('Respond with Resource');
});

module.exports = router;