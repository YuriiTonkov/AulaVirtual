//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
$.WinExamenes.title = data.Nombre;
$.WinExamenes.setRightNavButton($.addExamen);
//-----------------------------------------


var Examenes = Alloy.Collections.Examen;
Examenes.fetch();

//Funciones--------------------------

function TextoFila (model){
    var transform = model.toJSON();
    transform.TextoFila = "Examen: "+transform.FechaExamen+"   Nota: "+transform.Nota;
    return transform
}

function filtrado (collection){
    var coleccion_filtrada = collection.where({Evaluacion: data.IdEvaluacion});
    return coleccion_filtrada;
}
function NuevoExamen (){
    var tabExamenController = Alloy.createController("NuevoExamen", {"Evaluacion":data.IdEvaluacion, "Nombre":data.FechaExamen});
    Alloy.Globals.tabGroup.open(tabExamenController.getView());
    
}

//-----------------------------------------

//Listeners-----------------------------

$.TablaExamenes.addEventListener('delete', function(e) 
{
    //console.debug("recogemos:"+e.rowData.data);
    var Examenes = Alloy.Collections.Examen;
    var model = Examenes.get(e.rowData.data);
    
    model.destroy();
    Examenes.remove(model);
    Examenes.fetch();
});

//--------------------------------




