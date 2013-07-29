function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblGradosRow = Ti.UI.createTableViewRow({
        id: "tblGradosRow",
        hasChild: "true"
    });
    $.__views.tblGradosRow && $.addTopLevelView($.__views.tblGradosRow);
    $.__views.lblGrado = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "center",
        id: "lblGrado",
        text: "undefined" != typeof $model.__transform["NombreGrado"] ? $model.__transform["NombreGrado"] : $model.get("NombreGrado"),
        textid: "undefined" != typeof $model.__transform["IdGrado"] ? $model.__transform["IdGrado"] : $model.get("IdGrado")
    });
    $.__views.tblGradosRow.add($.__views.lblGrado);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.lblGrado.addEventListener("click", function(e) {
        console.debug("Añadimos el handler para el evento de click");
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