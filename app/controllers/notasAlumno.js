//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
$.WinNotasAlumno.title = data.Nombre;
$.WinNotasAlumno.setRightNavButton($.addAnotacion);
//-----------------------------------------

var Anotaciones = Alloy.Collections.Anotacion;
Anotaciones.fetch();



//Funciones--------------------------



function filtrado (collection){
	if (data.IdAlumno ==undefined){
		if (data.IdClase == undefined){
			var coleccion_filtrada = collection.where({IdAsignatura: data.IdAsignatura});
		} else {
		var coleccion_filtrada = collection.where({IdClase: data.IdClase});
	}
} else {
	var coleccion_filtrada = collection.where({IdAlumno: data.IdAlumno});
}
    
    return coleccion_filtrada;
}

function NuevaAnotacion (){
	if (data.IdAlumno ==undefined){
		if (data.IdClase == undefined){
			var tabAnotacionController = Alloy.createController("NuevaNotaAlumno", {"IdAsignatura":data.IdAsignatura});
    		Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
		} else {
		var tabAnotacionController = Alloy.createController("NuevaNotaAlumno", {"IdClase":data.IdClase});
    	Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
	}
} else {
	var tabAnotacionController = Alloy.createController("NuevaNotaAlumno", {"IdAlumno":data.IdAlumno});
    Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
}
    
    
}

//-----------------------------------------

//Listeners-----------------------------

$.TablaAnotaciones.addEventListener('delete', function(e) 
{
    //console.debug("recogemos:"+e.rowData.data);
    var Anotaciones = Alloy.Collections.Anotacion;
    var model = Anotaciones.get(e.rowData.data);
    
    model.destroy();
    Anotaciones.remove(model);
    Anotaciones.fetch();
});

//--------------------------------

$.TablaAnotaciones.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    	if (e.source.id == "tblAnotacionRow") {
        var tabItemController = Alloy.createController("NuevaNotaAlumno", {"IdAnotacion":e.source.data,"IdAlumno":data.IdAlumno});
        Alloy.Globals.GrupoTab.activeTab.open(tabItemController.getView());
      } else {
      	var tabItemController = Alloy.createController("NuevaNotaAlumno", {"IdAnotacion":e.source.textid,"IdAlumno":data.IdAlumno});
        Alloy.Globals.GrupoTab.activeTab.open(tabItemController.getView());
      }
      
});


