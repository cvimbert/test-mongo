/**
 * Created by reunion on 16/10/2017.
 */
import {MongoClient} from "mongodb";
import { model, adapter, use, Joi } from 'modli';
import mongo from 'modli-mongo';

MongoClient.connect("mongodb://localhost:27017/testsite", function(error, db) {
    if (error)  {
        console.log("err");
        return;
    }

    model.add({
        name: 'foo',
        version: 1,
        collection: 'fooCollection',
        schema: {
            id: Joi.number().integer(),
            fname: Joi.string().min(3).max(30),
            lname: Joi.string().min(3).max(30),
            email: Joi.string().email().min(3).max(254).required()
        }
    });

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