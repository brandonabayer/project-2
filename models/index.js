"use strict";

var fs = require("fs");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
