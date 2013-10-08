function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AnotacionRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tblAnotacionRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "55dp",
        editable: "true",
        data: "undefined" != typeof $model.__transform["IdAnotacion"] ? $model.__transform["IdAnotacion"] : $model.get("IdAnotacion"),
        hasChild: "true",
        id: "tblAnotacionRow"
    });
    $.__views.tblAnotacionRow && $.addTopLevelView($.__views.tblAnotacionRow);
    $.__views.lblAnotacion = Ti.UI.createLabel({
        width: "100%",
        height: "40dp",
        textAlign: "left",
        left: "10dp",
        font: {
            fontSize: 16,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        top: "2dp",
        id: "lblAnotacion",
        text: "undefined" != typeof $model.__transform["Fecha"] ? $model.__transform["Fecha"] : $model.get("Fecha"),
        textid: "undefined" != typeof $model.__transform["IdAnotacion"] ? $model.__transform["IdAnotacion"] : $model.get("IdAnotacion")
    });
    $.__views.tblAnotacionRow.add($.__views.lblAnotacion);
    $.__views.lblComentario = Ti.UI.createLabel({
        width: "90%",
        height: "30dp",
        top: "20dp",
        font: {
            fontSize: 10,
            fontFamily: "HelveticaNeue-UltraLight"
        },
        textAlign: "left",
        left: "10dp",
        id: "lblComentario",
        text: "undefined" != typeof $model.__transform["Comentario"] ? $model.__transform["Comentario"] : $model.get("Comentario"),
        textid: "undefined" != typeof $model.__transform["IdAnotacion"] ? $model.__transform["IdAnotacion"] : $model.get("IdAnotacion")
    });
    $.__views.tblAnotacionRow.add($.__views.lblComentario);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;