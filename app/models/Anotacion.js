exports.definition = {
	config: {
		columns: {
		    "IdAnotacion": "integer",
		    "IdAlumno": "integer",
		    "IdClase": "integer",
		    "IdAsignatura": "integer",
		    "Fecha": "date",
		    "Comentario": "string"
		},
		adapter: {
			type: "sql",
            collection_name: "Anotacion",
<<<<<<< HEAD
            db_file: "/AulaVirtual_v13.sqlite",
            db_name: "AulaVirtual",
=======
			db_file: "/AulaVirtual_v13.sqlite",            
			db_name: "AulaVirtual",
>>>>>>> 3c119669e2457d610aedeaf82207f28db26c2a05
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
}

