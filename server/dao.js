var Datastore = require("nedb");
var path = require("path");
var db = {
  questions: new Datastore({
    filename: path.join(__dirname,"db","questions"),
    autoload: true
  })
   
};

module.exports = db;
