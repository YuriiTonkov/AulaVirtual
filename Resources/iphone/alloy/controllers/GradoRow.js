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
    this.__controllerPath = "GradoRow";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        var $model = __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tblGradosRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "tblGradosRow",
        hasChild: "true"
    });
    $.__views.tblGradosRow && $.addTopLevelView($.__views.tblGradosRow);
    $.__views.lblGrado = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "16dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        id: "lblGrado",
        text: "undefined" != typeof $model.__transform["NombreGrado"] ? $model.__transform["NombreGrado"] : $model.get("NombreGrado"),
        textid: "undefined" != typeof $model.__transform["IdGrado"] ? $model.__transform["IdGrado"] : $model.get("IdGrado")
    });
    $.__views.tblGradosRow.add($.__views.lblGrado);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblGrado.addEventListener("click", function(e) {
        console.debug("Añadimos el handler para el evento de click Row");
        var tabCursosController = Alloy.createController("WinCursos", {
            IdGrado: e.source.textid,
            NombreGrado: e.source.text
        });
        Alloy.Globals.tabGroup.open(tabCursosController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;