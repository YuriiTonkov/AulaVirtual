var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.databaseversion = "1";

var Cloud = require("ti.cloud");

Cloud.debug = true;

Alloy.createController("index");