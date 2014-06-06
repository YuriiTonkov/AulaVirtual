exports.definition = {
    config: {
        columns: {
            IdExamen: "int",
            Evaluacion: "int",
            Nota: "float",
            FechaExamen: "date",
            Descripcion: "string",
            Peso: "int"
        },
        adapter: {
            type: "sql",
            collection_name: "Examen",
            db_file: "/Aula_VirtualDB.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdExamen",
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

model = Alloy.M("Examen", exports.definition, []);

collection = Alloy.C("Examen", exports.definition, model);

exports.Model = model;

exports.Collection = collection;