/*const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./index.js")(mongoose);

module.exports = db;*/

const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/db_09_10', { useNewUrlParser: true });

const db = {}
db.mongoose = mongoose
db.url = "mongodb://127.0.0.1:27017/db_09_10"
db.tutorials = require("./tutorial.model.js")(mongoose)
module.exports = db;