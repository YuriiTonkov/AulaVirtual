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
    this.__controllerPath = "ExamenRow";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tblExamenRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdExamen"] ? $model.__transform["IdExamen"] : $model.get("IdExamen"),
        hasChild: "true",
        id: "tblExamenRow"
    });
    $.__views.tblExamenRow && $.addTopLevelView($.__views.tblExamenRow);
    $.__views.lblExamen = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "lblExamen",
        text: "undefined" != typeof $model.__transform["TextoFila"] ? $model.__transform["TextoFila"] : $model.get("TextoFila"),
        textid: "undefined" != typeof $model.__transform["IdExamen"] ? $model.__transform["IdExamen"] : $model.get("IdExamen")
    });
    $.__views.tblExamenRow.add($.__views.lblExamen);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.tblExamenRow.addEventListener("click", function(e) {
        if ("tblExamenRow" == e.source.id) {
            var tabAlumnosController = Alloy.createController("NuevoExamen", {
                IdExamen: e.source.data
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
        } else {
            var tabAlumnosController = Alloy.createController("NuevoExamen", {
                IdExamen: e.source.textid
            });
            Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;