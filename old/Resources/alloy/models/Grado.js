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
            db_file: "/AulaVirtual_v" + require("Alloy").CFG.databaseversion + ".sqlite",
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

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Grado", exports.definition, []);

collection = Alloy.C("Grado", exports.definition, model);

exports.Model = model;

exports.Collection = collection;