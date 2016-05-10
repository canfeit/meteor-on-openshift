#!/bin/env node

// Setup env
var APP_DNS;
APP_DNS = "wuwei.kedo.so";

process.env.ROOT_URL = "http://"+(APP_DNS || process.env.OPENSHIFT_APP_DNS);
process.env.MONGO_URL = (process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME) || "mongodb://localhost:27017/meteor";

// process.env.MAIL_URL = "smtp://email:password@smtp.gmail.com:465";
process.env.PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
process.env.BIND_IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
process.env.DDP_DEFAULT_CONNECTION_URL = 'http://' + (APP_DNS || process.env.OPENSHIFT_APP_DNS) + ':8000';
//for ssl
//process.env.DDP_DEFAULT_CONNECTION_URL = 'https://' + process.env.OPENSHIFT_APP_DNS + ':8443'

// Show connection details on startup
console.log("MONGO_URL IS: " + process.env.MONGO_URL);
console.log("ROOT_URL IS: " + process.env.ROOT_URL);
console.log("PORT: " + process.env.PORT);
console.log("BIND_IP: " + process.env.BIND_IP);
console.log("DDP_URL: " + process.env.DDP_DEFAULT_CONNECTION_URL);
require('./bundle/main.js');
