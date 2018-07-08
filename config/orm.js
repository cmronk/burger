var connection = require("./connection.js");

var orm = {

// we will need these methods
selectAll: function() {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
},
insertOne: function(){},
updateOne: function(){}

}






module.exports = orm;