//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
$.WinClases.title = data.Nombre;
$.WinClases.setRightNavButton($.addClase);
//-----------------------------------------


var clases = Alloy.Collections.Clase;
clases.fetch();

//Funciones--------------------------

function NombreClase (model){
    var transform = model.toJSON();
    transform.nombreCompleto = "Sección " + transform.Nombre;
    return transform
}

function filtrado (collection){
    var coleccion_filtrada = collection.where({Curso: data.IdCurso});
    return coleccion_filtrada;
}

function NuevaClase (){
    var tabClasesController = Alloy.createController("NuevaClase", {"IdCurso":data.IdCurso, "Nombre":data.Nombre});
    Alloy.Globals.tabGroup.open(tabClasesController.getView());
    
}

//-----------------------------------------

//Listeners-----------------------------

$.TablaClases.addEventListener('delete', function(e) 
{
    //console.debug("recogemos:"+e.rowData.data);
    var clases = Alloy.Collections.Clase;
    var model = clases.get(e.rowData.data);
    
    model.destroy();
    clases.remove(model);
    clases.fetch();
});

//--------------------------------