var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.databaseversion = "1";

var Cloud = require("ti.cloud");

Cloud.debug = true;

var validate = require("hdjs.validate");

var validator = new validate.FormValidator();

Alloy.createController("index");