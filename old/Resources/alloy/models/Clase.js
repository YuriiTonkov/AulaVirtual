exports.definition = {
    config: {
        columns: {
            IdClase: "int",
            Nombre: "string",
            NumAlumnos: "int",
            Curso: "int"
        },
        adapter: {
            type: "sql",
            collection_name: "Clase",
            db_file: "/AulaVirtual_v" + require("Alloy").CFG.databaseversion + ".sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdClase",
            remoteBackup: "false"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Clase", exports.definition, []);

collection = Alloy.C("Clase", exports.definition, model);

exports.Model = model;

exports.Collection = collection;