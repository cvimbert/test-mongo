/**
 * Created by reunion on 16/10/2017.
 */
(function (global) {
    System.config({
        paths: {
            'mongodb': "node_modules/mongodb",
            'mongodb-core': "node_modules/mongodb",
            'gridfs-stream': "node_modules/mongodb/lib/gridfs-stream"
        },
        packageConfigPaths: ['node_modules/*/package.json'],
        packages: {
            '*': {
                defaultExtension: "js"
            }
        },
        map: {
            'mongodb/lib/gridfs-stream': "node_modules/mongodb/lib/gridfs-stream/index.js"
        }
    })
})(this);