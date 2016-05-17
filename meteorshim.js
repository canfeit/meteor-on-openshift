#!/bin/env node

// Setup env
var APP_DNS;
//APP_DNS = "ww.kedo.so";

process.env.ROOT_URL = "http://"+(APP_DNS || process.env.OPENSHIFT_APP_DNS);
process.env.MONGO_URL = (process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME) || "mongodb://localhost:27017/meteor";
process.env.PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
process.env.BIND_IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
// process.env.MAIL_URL = "smtp://email:password@smtp.gmail.com:465";

console.log("#####################################################");
console.log("ROOT_URL: " + process.env.ROOT_URL);
console.log("MONGO_URL: " + process.env.MONGO_URL);
console.log("PORT: " + process.env.PORT);
console.log("BIND_IP: " + process.env.BIND_IP);
console.log("MAIL_URL: " + process.env.MAIL_URL);
console.log("Node_Version: " + process.version);
console.log("#####################################################");
require('./bundle/main.js');
