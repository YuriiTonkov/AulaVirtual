function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.DetailAlumno = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "DetailAlumno"
    });
    $.__views.DetailAlumno && $.addTopLevelView($.__views.DetailAlumno);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Detalle de alumno",
        top: "2%",
        width: "20%",
        id: "__alloyId3"
    });
    $.__views.DetailAlumno.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;