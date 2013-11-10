function Controller() {
    function __alloyId85() {
        __alloyId85.opts || {};
        var models = filtrado(__alloyId84);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId80 = models[i];
            __alloyId80.__transform = nombrecompleto(__alloyId80);
            var __alloyId81 = Alloy.createController("AlumnoRow", {
                $model: __alloyId80
            });
            rows.push(__alloyId81.getViewEx({
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
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
    $.__views.TablaAlumnos = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundImage: "backGround320x416Base.png",
        top: "0dp",
        id: "TablaAlumnos"
    });
    $.__views.WinAlumnos.add($.__views.TablaAlumnos);
    $.__views.__alloyId78 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/04HeaderClase.png",
        height: "70dp",
        id: "__alloyId78"
    });
    $.__views.TablaAlumnos.headerView = $.__views.__alloyId78;
    $.__views.__alloyId83 = Ti.UI.createImageView({
        image: "library/images/iphone/helpScreen/04FooterClase.png",
        id: "__alloyId83"
    });
    $.__views.TablaAlumnos.footerView = $.__views.__alloyId83;
    var __alloyId84 = Alloy.Collections["Alumno"] || Alumno;
    __alloyId84.on("fetch destroy change add remove reset", __alloyId85);
    exports.destroy = function() {
        __alloyId84.off("fetch destroy change add remove reset", __alloyId85);
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