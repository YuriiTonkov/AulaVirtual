function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "DetailAlumno";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.DetailAlumno = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "DetailAlumno"
    });
    $.__views.DetailAlumno && $.addTopLevelView($.__views.DetailAlumno);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        text: "Detalle de alumno",
        top: "2%",
        width: "20%",
        id: "__alloyId23"
    });
    $.__views.DetailAlumno.add($.__views.__alloyId23);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;