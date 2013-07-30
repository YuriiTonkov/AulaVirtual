function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Grado");
    Alloy.Collections.instance("Curso");
    Alloy.Collections.instance("Clase");
    Alloy.Collections.instance("Alumno");
    Alloy.Collections.instance("VW_Alumno_Asignatura_Asignatura");
    Alloy.Collections.instance("VW_Asignatura_Alumno_Left");
    Alloy.Collections.instance("Alumno_Asignatura");
    Alloy.Collections.instance("Evaluacion");
    Alloy.Collections.instance("Examen");
    Alloy.Collections.instance("Asignatura");
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId36 = Alloy.createController("TabPrincipal", {
        id: "__alloyId36"
    });
    $.__views.index.addTab($.__views.__alloyId36.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;