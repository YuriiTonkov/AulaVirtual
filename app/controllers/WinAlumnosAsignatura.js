//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
$.WinAsignaturasAlumno.title = data.Nombre;
var tab = Alloy.createController("BotoneraAsignatura", {"IdAsignatura":data.IdAsignatura});
$.WinAsignaturasAlumno.setRightNavButton(tab.getView());
//-----------------------------------------


var alumnos = Alloy.Collections.VW_Alumno_Asignatura_Asignatura;
alumnos.fetch();

//Funciones--------------------------

function filtrado (collection){
    var coleccion_filtrada = collection.where({Asignatura: data.IdAsignatura});
    return coleccion_filtrada;
}

function nombrecompleto(model){
    var transform = model.toJSON();
    transform.nombrecompleto = transform.NombreAlumno + " " + transform.Apellido1 + " " + transform.Apellido2;
    return transform;
}


//-----------------------------------------

//Listeners-----------------------------

$.TablaAlumnosByAsignatura.addEventListener('delete', function(e) 
{
    //console.debug("recogemos:"+e.rowData.data);
    var alumnos = Alloy.Collections.Alumno_Asignatura;
    alumnos.fetch();
    var model = alumnos.get(e.rowData.data);
    
    model.destroy();
    alumnos.remove(model);
    alumnos.fetch();
});


//--------------------------------