'use strict';
var config = require('./config');
var utilities = require('./utilities');

var FirebaseConect = {
    get: function(file, next) {
      var ref = new Firebase(config.firebasePath + '/' + file);
      // Attach an asynchronous callback to read the data at our posts reference
      ref.on("value", function(snapshot) {
        next( snapshot.val() );
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
          });
    },
    //This is pushing data to data list
    //and create a unique timestamp based ID
    //for data in a list
    push: function(listPath, obj, next) {
      var ref = new Firebase(config.firebasePath);
      var listRef = ref.child(listPath);
      // Generate a reference to a new location and add some data using push()
      var listItemRef = listRef.push({
        author: "gracehop",
        title: "Announcing COBOL, a New Programming Language"
      });
      // Get the unique ID generated by push()
      var listItemID = listItemRef.key();
      //handle ID
      next(listItemID);
    },
    set: function(childPath, obj) {
      var ref = new Firebase(config.firebasePath);
      var childRef = ref.child(childPath);
      //This will create path and data
      //or replace all existing data with obj in childPath
      childRef.set(obj);
    },
    update: function(parentPath, childName, obj) {
      var ref = new Firebase(config.firebasePath);
      var parentRef = ref.child(parentPath);
      var childRef = parentRef.child(childName);
      //This updates EXISTING data in childPef
      //so obj should be filled with properties
      //which already are present in child
      childRef.update(obj);
    }
  };

module.exports = FirebaseConect;
