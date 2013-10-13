function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NuevoAlumnoCloud";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.NuevoAlumnoCloud = Ti.UI.createWindow({
        barColor: "#e7effa",
        translucent: "false",
        backgroundColor: "EEE",
        id: "NuevoAlumnoCloud",
        title: "Solicitantes"
    });
    $.__views.NuevoAlumnoCloud && $.addTopLevelView($.__views.NuevoAlumnoCloud);
    $.__views.TablaAlumnosCloud = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        id: "TablaAlumnosCloud"
    });
    $.__views.NuevoAlumnoCloud.add($.__views.TablaAlumnosCloud);
    $.__views.tblAlumnoCloudRow = Ti.UI.createTableViewRow({
        backgroundColor: "white",
        height: "40dp",
        id: "tblAlumnoCloudRow"
    });
    $.__views.NuevoAlumnoCloud.add($.__views.tblAlumnoCloudRow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.NuevoAlumnoCloud.title = "Solicitudes de tutoría";
    Cloud.Friends.requests(function(e) {
        if (e.success) if (0 == e.friend_requests.length) $.TablaAlumnosCloud.setData([ {
            title: "No hay solicitantes"
        } ]); else {
            var data = [];
            for (var i = 0, l = e.friend_requests.length; l > i; i++) {
                var user = e.friend_requests[i].user;
                var row = $.tblAlumnoCloudRow;
                row.title = user.first_name + " " + user.last_name;
                data.push(row);
            }
            $.TablaAlumnosCloud.setData(data);
        } else {
            $.TablaAlumnosCloud.setData.setData([ {
                title: e.error && e.message || e
            } ]);
            error(e);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;