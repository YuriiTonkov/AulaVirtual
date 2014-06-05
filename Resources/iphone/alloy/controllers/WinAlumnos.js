function Controller() {
    function __alloyId89(e) {
        if (e && e.fromAdapter) return;
        __alloyId89.opts || {};
        var models = filtrado(__alloyId88);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId83 = models[i];
            __alloyId83.__transform = nombrecompleto(__alloyId83);
            var __alloyId85 = Alloy.createController("AlumnoRow", {
                $model: __alloyId83,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId85.getViewEx({
                recurse: true
            }));
        }
        $.__views.TablaAlumnos.setData(rows);
    }
    function filtrado(collection) {
        var coleccion_filtrada = collection.where({
            Clase: data.IdClase
        });
        return coleccion_filtrada;
    }
    function nombrecompleto(model) {
        var transform = model.toJSON();
        transform.nombrecompleto = transform.Nombre + " " + transform.Apellido1 + " " + transform.Apellido2;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "WinAlumnos";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.WinAlumnos = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "e2effa",
        id: "WinAlumnos",
        title: "Alumnos"
    });
    $.__views.WinAlumnos && $.addTopLevelView($.__views.WinAlumnos);
    $.__views.__alloyId82 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/04HeaderClase.png",
        height: "70dp",
        id: "__alloyId82"
    });
    $.__views.__alloyId87 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/04FooterClase.png",
        id: "__alloyId87"
    });
    $.__views.TablaAlumnos = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        headerView: $.__views.__alloyId82,
        footerView: $.__views.__alloyId87,
        id: "TablaAlumnos"
    });
    $.__views.WinAlumnos.add($.__views.TablaAlumnos);
    var __alloyId88 = Alloy.Collections["Alumno"] || Alumno;
    __alloyId88.on("fetch destroy change add remove reset", __alloyId89);
    exports.destroy = function() {
        __alloyId88.off("fetch destroy change add remove reset", __alloyId89);
    };
    _.extend($, $.__views);
    var arg1 = arguments[0] || {};
    var data = [];
    data = arg1;
    $.WinAlumnos.title = data.Nombre;
    var tab = Alloy.createController("BotoneraClase", {
        IdClase: data.IdClase
    });
    $.WinAlumnos.setRightNavButton(tab.getView());
    $.TablaAlumnos.addEventListener("delete", function(e) {
        var alumnos = Alloy.Collections.Alumno;
        var model = alumnos.get(e.rowData.data);
        Cloud.Friends.remove({
            user_ids: model.UsuarioCloud
        }, function(e) {
            e.success && alert("Se ha desvinculado al alumno");
            model.destroy();
            alumnos.remove(model);
            alumnos.fetch();
        });
    });
    $.WinAlumnos.addEventListener("focus", function() {
        var alumnos = Alloy.Collections.Alumno;
        alumnos.fetch();
        if ("1" == Ti.App.Properties.getString("Ayuda")) {
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Ayuda",
                message: "En esta pantalla se pueden visualizar los alumnos pertenecientes a la clase " + data.Nombre,
                buttonNames: [ "OK" ],
                cancel: 0
            });
            alertDialog.show();
        }
    });
    $.WinAlumnos.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;