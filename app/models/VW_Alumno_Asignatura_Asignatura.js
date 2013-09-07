exports.definition = {
	config: {
		columns: {
		    "IdAlumnoAsignatura": "integer",
		    "Alumno": "integer",
		    "NombreAlumno": "string",
		    "Apellido1": "string",
		    "Apellido2": "string",
		    "Asignatura": "integer",
		    "Nombre": "string"
		},
		adapter: {
			type: "sql",
            collection_name: "VW_Alumno_Asignatura_Asignatura",
            db_file: "/Aula_VirtualDB.sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAlumnoAsignatura",
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

