exports.definition = {
    config: {
        columns: {
            IdClase: "int",
            NombreClase: "string",
            NombreCurso: "string",
            NombreGrado: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "VW_Clases_Favoritas",
            db_file: "/Aula_VirtualDB.sqlite",
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

model = Alloy.M("VW_Clases_Favoritas", exports.definition, []);

collection = Alloy.C("VW_Clases_Favoritas", exports.definition, model);

exports.Model = model;

exports.Collection = collection;