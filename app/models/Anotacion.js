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
			db_file: "/Aula_VirtualDB.sqlite",            
			db_name: "AulaVirtual",
			idAttribute: "IdAnotacion",
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

