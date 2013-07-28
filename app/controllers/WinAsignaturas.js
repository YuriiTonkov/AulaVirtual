//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
$.WinAsignaturasAlumno.title = data.Nombre;
$.WinAsignaturasAlumno.setRightNavButton($.addAsignatura);
//-----------------------------------------


var AsignaturasAlumno = Alloy.Collections.VW_Alumno_Asignatura_Asignatura;
AsignaturasAlumno.fetch();

//Funciones--------------------------


function filtrado (collection){
    var coleccion_filtrada = collection.where({Alumno: data.IdAlumno});
    return coleccion_filtrada;
}
function NuevoAsignatura (){
    var tabAsignaturaController = Alloy.createController("NuevaAsignatura", {"IdAlumno":data.IdAlumno, "Nombre":data.Nombre});
    Alloy.Globals.tabGroup.open(tabAsignaturaController.getView());
    
}

//-----------------------------------------

//Listeners-----------------------------

$.TablaAsignaturasByAlumno.addEventListener('delete', function(e) 
{
    //console.debug("recogemos:"+e.rowData.data);
    var Asignaturas = Alloy.Collections.Alumno_Asignatura;
    Asignaturas.fetch();
    var model = Asignaturas.get(e.rowData.data);
    
    model.destroy();
    Asignaturas.remove(model);
    Asignaturas.fetch();
});

//--------------------------------




