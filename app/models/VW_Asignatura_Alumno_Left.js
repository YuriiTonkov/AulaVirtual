exports.definition = {
	config: {
		columns: {
		    "IdCurso": "integer",
		    "IdAlumno": "integer",
		    "IdAsignatura": "integer",
		    "Nombre": "string"
		},
		adapter: {
            type: "sql",
            collection_name: "VW_Asignatura_Alumno_Left",
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
			filtraAsignatura: function (idAlumno){
			    
			   try{
			       var query1 = 'SELECT * FROM VW_ASIGNATURA_ALUMNO_LEFT WHERE IdAlumno=' + idAlumno + ' AND  IdAsignatura NOT IN (SELECT Asignatura FROM VW_ALUMNO_ASIGNATURA_ASIGNATURA WHERE Alumno=' + idAlumno+')'
                   this.fetch({query: query1});                     
                }catch (err){
                    Ti.API.info('ERROR: ' + JSON.stringify(err))
                }   
			}
		});
		
		return Collection;
	}
}

