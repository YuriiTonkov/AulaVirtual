exports.definition = {
	config: {
		columns: {
		    "IdAsignatura": "int",
		    "Nombre": "string",
		    "Descripcion": "string",
		    "Optativa": "boolean",
		    "Curso": "int"
		},
		adapter: {
			type: "sql",
			collection_name: "Asignatura",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
			db_name: "AulaVirtual",
			idAttribute: "IdAsignatura",
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

