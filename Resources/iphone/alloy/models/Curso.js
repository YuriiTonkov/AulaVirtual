var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            IdCurso: "int",
            Nombre: "string",
            Duracion: "int",
            Grado: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "Curso",
            db_file: "/Aula_VirtualDB.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdCurso",
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

model = Alloy.M("Curso", exports.definition, []);

collection = Alloy.C("Curso", exports.definition, model);

exports.Model = model;

exports.Collection = collection;