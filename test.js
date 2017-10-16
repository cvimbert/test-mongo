/**
 * Created by reunion on 16/10/2017.
 */
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/testsite", function(error, db) {
    if (error)  {
        console.log("err");
        return;
    }

    //var collection = db.collection('documents');


    db.collection("test").find().toArray(function (err, res) {

        console.log(res);

        if (err) {
            console.log(err);
            return;
        }

        process.exit(1);

    });

});