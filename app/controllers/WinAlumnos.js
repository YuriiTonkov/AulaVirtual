//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
$.WinAlumnos.title = data.Nombre;
$.WinAlumnos.setRightNavButton($.addAlumno);
//-----------------------------------------


var alumnos = Alloy.Collections.Alumno;
alumnos.fetch();

//Funciones--------------------------
function NuevoAlumno (){
    var tabAlumnosController = Alloy.createController("NuevoAlumno", {"IdClase":data.IdClase, "Nombre":data.Nombre});
    Alloy.Globals.tabGroup.open(tabAlumnosController.getView());  
}

function filtrado (collection){
    var coleccion_filtrada = collection.where({Clase: data.IdClase});
    return coleccion_filtrada;
}

function nombrecompleto(model){
    var transform = model.toJSON();
    transform.nombrecompleto = transform.Nombre + " " + transform.Apellido1 + " " + transform.Apellido2;
    return transform;
}


//-----------------------------------------

//Listeners-----------------------------

$.TablaAlumnos.addEventListener('delete', function(e) 
{
    //console.debug("recogemos:"+e.rowData.data);
    var alumnos = Alloy.Collections.Alumno;
    var model = alumnos.get(e.rowData.data);
    
    model.destroy();
    alumnos.remove(model);
    alumnos.fetch();
});

//--------------------------------