function Controller() {
    function __alloyId35() {
        var models = __alloyId34.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId32 = models[i];
            __alloyId32.__transform = {};
            var __alloyId33 = Ti.UI.createTableViewRow({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "HelveticaNeue"
                },
                textAlign: "center",
                data: "undefined" != typeof __alloyId32.__transform["IdAsignatura"] ? __alloyId32.__transform["IdAsignatura"] : __alloyId32.get("IdAsignatura"),
                title: "undefined" != typeof __alloyId32.__transform["Nombre"] ? __alloyId32.__transform["Nombre"] : __alloyId32.get("Nombre")
            });
            rows.push(__alloyId33);
        }
        $.__views.TablaAsignaturas.setData(rows);
    }
    function GuardarAsignatura() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winNuevaAsignatura = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winNuevaAsignatura"
    });
    $.__views.winNuevaAsignatura && $.addTopLevelView($.__views.winNuevaAsignatura);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        text: "Seleccione la asignatura",
        top: "5%",
        id: "__alloyId31"
    });
    $.__views.winNuevaAsignatura.add($.__views.__alloyId31);
    $.__views.TablaAsignaturas = Ti.UI.createTableView({
        id: "TablaAsignaturas",
        allowsSelection: "true"
    });
    $.__views.winNuevaAsignatura.add($.__views.TablaAsignaturas);
    var __alloyId34 = Alloy.Collections["Asignatura"] || Asignatura;
    __alloyId34.on("fetch destroy change add remove reset", __alloyId35);
    $.__views.btnGuardar = Ti.UI.createButton({
        id: "btnGuardar",
        top: "-50dp",
        title: "Guardar"
    });
    $.__views.winNuevaAsignatura.add($.__views.btnGuardar);
    GuardarAsignatura ? $.__views.btnGuardar.addEventListener("click", GuardarAsignatura) : __defers["$.__views.btnGuardar!click!GuardarAsignatura"] = true;
    exports.destroy = function() {
        __alloyId34.off("fetch destroy change add remove reset", __alloyId35);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.winNuevaAsignatura.setRightNavButton($.btnGuardar);
    var Asignaturas = Alloy.Collections.Asignatura;
    Asignaturas.fetch();
    __defers["$.__views.btnGuardar!click!GuardarAsignatura"] && $.__views.btnGuardar.addEventListener("click", GuardarAsignatura);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;