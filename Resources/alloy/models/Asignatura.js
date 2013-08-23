exports.definition = {
    config: {
        columns: {
            IdAsignatura: "int",
            Nombre: "string",
            Descripcion: "string",
            Optativa: "boolean",
            Curso: "int",
            Favorita: "int"
        },
        adapter: {
            type: "sql",
            collection_name: "Asignatura",
            db_file: "/AulaVirtual_v13.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAsignatura",
            remoteBackup: "false"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            updateFavorito: function(idAsignatura, favorito) {
                try {
                    var query1 = "UPDATE ASIGNATURA SET FAVORITA = " + favorito + " WHERE IdAsignatura= " + idAsignatura;
                    this.fetch({
                        query: query1
                    });
                } catch (err) {}
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Asignatura", exports.definition, []);

collection = Alloy.C("Asignatura", exports.definition, model);

exports.Model = model;

exports.Collection = collection;