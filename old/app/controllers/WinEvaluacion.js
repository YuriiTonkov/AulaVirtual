//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
$.WinEvaluacionesAlumno.title = data.Nombre;
$.WinEvaluacionesAlumno.setRightNavButton($.addEvaluacion);
//-----------------------------------------


var Evaluaciones = Alloy.Collections.Evaluacion;
Evaluaciones.fetch();

//Funciones--------------------------


function filtrado (collection){
    var coleccion_filtrada = collection.where({AlumnoAsignatura: data.IdAlumnoAsignatura});
    return coleccion_filtrada;
}
function NuevoEvaluacion (){
    var tabEvaluacionController = Alloy.createController("NuevaEvaluacion", {"AlumnoAsignatura":data.IdAlumnoAsignatura, "Nombre":data.Nombre});
    Alloy.Globals.tabGroup.open(tabEvaluacionController.getView());
    
}

//-----------------------------------------

//Listeners-----------------------------

$.TablaEvaluaciones.addEventListener('delete', function(e) 
{
    //console.debug("recogemos:"+e.rowData.data);
    var Evaluaciones = Alloy.Collections.Evaluacion;
    var model = Evaluaciones.get(e.rowData.data);
    
    model.destroy();
    Evaluaciones.remove(model);
    Evaluaciones.fetch();
});

//--------------------------------




