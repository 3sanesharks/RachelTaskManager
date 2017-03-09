/**
 * Created by Rachel on 3/9/2017.
 */

var fbImp = module.exports = {};
var path = require('path');
var crendentials = require(path.resolve('./config.js')).credentials;
var firebase = require('firebase');
var Promise = require('promise');

console.log(crendentials);
//check if the credentials are correct

firebase.initializeApp(
    crendentials
);

//Initialize firebase database instance
var db = firebase.database();

//Server logging purpose
var dbRef = db.ref('app/');

fbImp.api = {

    //Start of API creation

    getAllTasks : function(){
    return new Promise(function (resolve, reject)=> {
        var tasksRef = db.ref('app/tasks');
        var tasksList = [];
        tasksRef.orderByValue().on('value', function(snapshot){
            snapshot.forEach(function(data){
                data.forEach(function(value){
                    tasksList.push(value);
                });
            });
        });
        resolve(tasksList);
    })
    },

    createOneTask : function(inTask){
    return new Promise(function(resolve, reject)=> {
        var tasksRef = db.ref('/app/tasks').push(inTask);
        if(tasksRef){
            resolve(tasksRef.key);
        } else {
            reject('Unable to save task');
        }
    })
    },

    updateOneTask : function(){

    },

    deleteOneProject : function(){

    },

    sendNotification : function(){

    }

};