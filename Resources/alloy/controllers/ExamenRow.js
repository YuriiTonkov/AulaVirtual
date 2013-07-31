function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblExamenRow = Ti.UI.createTableViewRow({
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdExamen"] ? $model.__transform["IdExamen"] : $model.get("IdExamen"),
        hasChild: "true",
        id: "tblExamenRow"
    });
    $.__views.tblExamenRow && $.addTopLevelView($.__views.tblExamenRow);
    $.__views.lblExamen = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "center",
        id: "lblExamen",
        text: "undefined" != typeof $model.__transform["TextoFila"] ? $model.__transform["TextoFila"] : $model.get("TextoFila"),
        textid: "undefined" != typeof $model.__transform["IdExamen"] ? $model.__transform["IdExamen"] : $model.get("IdExamen")
    });
    $.__views.tblExamenRow.add($.__views.lblExamen);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;