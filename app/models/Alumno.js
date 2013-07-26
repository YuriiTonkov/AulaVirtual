exports.definition = {
	config: {
		columns: {
		    "IdAlumno": "int",
		    "Nombre": "string",
		    "Apellido1": "string",
		    "Apellido2": "string",
		    "Direccion": "string",
		    "CodPostal": "int",
		    "TelContacto": "integer",
		    "Email": "string",
		    "Clase": "int"
		},
		adapter: {
			type: "sql",
			collection_name: "Alumno",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
            db_name: "AulaVirtual",
            idAttribute: "IdAlumno",
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
}

