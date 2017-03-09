/**
 * Created by Rachel on 3/9/2017.
 */
var index = function(app){
    var express = require('express');
    var router = express.Router();

    require("../controllers/TasksWebAPIController.js")(app);

    app.get('/', function (req, res, next) {
        res.render('index', { title: 'Express'});
    });
}

module.exports = index;