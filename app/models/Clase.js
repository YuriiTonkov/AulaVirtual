exports.definition = {
	config: {
		columns: {
		    "IdClase": "int",
		    "Nombre": "string",
		    "NumAlumnos": "int",
		    "Curso": "int",
		    "Favorita": "int"
		},
		adapter: {
			type: "sql",
			collection_name: "Clase",
            db_file: "/AulaVirtual_v"+ require("Alloy").CFG.databaseversion +".sqlite",
			db_name: "AulaVirtual",
			idAttribute: "IdClase",
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
			updateFavorito: function(idClase, favorito){
			    try{
                   var query1 = "UPDATE CLASE SET FAVORITA = "+favorito+" WHERE IdClase= " + idClase;
                   this.fetch({query: query1});
                                       
                }catch (err){
                  //  Ti.API.info('ERROR: ' + JSON.stringify(err))
                }   
			}
		});
		
		return Collection;
	}
}

