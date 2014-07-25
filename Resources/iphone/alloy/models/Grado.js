var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            IdGrado: "int",
            NombreGrado: "string",
            Duracion: "int",
            PlanEdu: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "Grado",
            db_file: "/Aula_VirtualDB.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdGrado",
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

model = Alloy.M("Grado", exports.definition, []);

collection = Alloy.C("Grado", exports.definition, model);

exports.Model = model;

exports.Collection = collection;