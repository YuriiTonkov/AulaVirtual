function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "DetailAlumno";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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