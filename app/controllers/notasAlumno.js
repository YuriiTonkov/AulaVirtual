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
    var coleccion_filtrada = collection.where({IdAlumno: data.IdAlumno});
    return coleccion_filtrada;
}
function NuevaAnotacion (){
    var tabAnotacionController = Alloy.createController("NuevaNotaAlumno", {"IdAlumno":data.IdAlumno});
    Alloy.Globals.GrupoTab.activeTab.open(tabAnotacionController.getView());
    
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


