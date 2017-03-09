/**
 * Created by Rachel on 3/9/2017.
 */

var path = require('path');
var tasks = require(path.resolve("./apis/Tasks.js")).api;
var moment = require('moment');

//Apply the HTTPWebRequest API methods

var tasksWebAPIController = function (app) {
    app.get("/api/tasks", function(req, res){

        var tasksList = [];
        Promise.resolve(tasks.getAllTasks()).then(function (result) {

            result.forEach(function(data){
                tasksList.push(data.val());
            });
            return new Promise(function(resolve, reject){
                resolve(tasksList);
            });

        })
            .then(function(data){
                res.send(JSON.stringify(data));
            });
    });

    app.post("/api/tasks", function(req, res){
        try{
            var oneTask = {
                ['taskName']: req.body.taskName,
                ['taskStart']: req.body.taskStart,
                ['taskEnd']: req.body.taskEnd,
                ['taskId']: req.body.taskId
            }
            tasks.createOneTask(oneTask).then(function(key){
                res.send('Response ' + '"' + String(req.protocol + '://' + req.get('host') + req.originalUrl) + '  Task Record Key: '+ key);
            })
        } catch (err){
            res.send(err.message);
        }
    });
};