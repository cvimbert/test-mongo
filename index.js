(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mongodb", "modli"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by reunion on 16/10/2017.
     */
    var mongodb_1 = require("mongodb");
    var modli_1 = require("modli");
    mongodb_1.MongoClient.connect("mongodb://localhost:27017/testsite", function (error, db) {
        if (error) {
            console.log("err");
            return;
        }
        modli_1.model.add({
            name: 'foo',
            version: 1,
            collection: 'fooCollection',
            schema: {
                id: modli_1.Joi.number().integer(),
                fname: modli_1.Joi.string().min(3).max(30),
                lname: modli_1.Joi.string().min(3).max(30),
                email: modli_1.Joi.string().email().min(3).max(254).required()
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
});
//# sourceMappingURL=index.js.map