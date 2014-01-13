exports.definition = {
	config: {
		columns: {
		    "IdExamen": "integer",
		    "IdAlumno": "integer",
		    "Nombre": "string",
		    "Apellido1": "string",
		    "Apellido2": "string",
		    "Email": "string",
		    "EVALUACION": "string",
		    "FechaExamen": "string",
		    "Nota": "int",
		    "Peso": "integer",
		    "Descripcion": "string",
		    "ASIGNATURA": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "VW_Examen_Alumno",
			db_file: "/Aula_VirtualDB.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdExamen",
            remoteBackup:"false"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};