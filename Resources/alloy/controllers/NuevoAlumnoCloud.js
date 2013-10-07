function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "NuevoAlumnoCloud";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.TablaAlumnosCloud = Ti.UI.createTableView({
        style: Ti.UI.iPhone.TableViewStyle.GROUPED,
        backgroundColor: "transparent",
        id: "TablaAlumnosCloud"
    });
    $.__views.TablaAlumnosCloud && $.addTopLevelView($.__views.TablaAlumnosCloud);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Cloud.Friends.requests(function(e) {
        if (e.success) if (0 == e.friend_requests.length) $.TablaAlumnosCloud.setData([ {
            title: "No hay solicitantes"
        } ]); else {
            var data = [];
            data.push({
                title: "Solicitudes de tutoria"
            });
            for (var i = 0, l = e.friend_requests.length; l > i; i++) {
                var user = e.friend_requests[i].user;
                var row = Ti.UI.createTableViewRow({
                    title: user.first_name + " " + user.last_name
                });
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