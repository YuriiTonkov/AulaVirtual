//Argumentos trasladados
var arg1 = arguments[0] || {};
var data = [];
data = arg1;
//----------------------------

//Elementos de Interfaz
$.WinAsignaturasAlumno.title = "Asignaturas";
$.WinAsignaturasAlumno.setRightNavButton($.addAsignatura);
//-----------------------------------------


var Asignaturas = Alloy.Collections.Asignatura;
Asignaturas.fetch();

//Funciones--------------------------


function filtrado (collection){
    var coleccion_filtrada = collection.where({Curso: data.Curso});
    return coleccion_filtrada;
}
function NuevaAsignatura (){
    var tabAsignaturaController = Alloy.createController("CrearAsignatura", {"IdCurso":data.Curso});
    Alloy.Globals.GrupoTab.activeTab.open(tabAsignaturaController.getView());
    
}

//-----------------------------------------

//Listeners-----------------------------

$.TablaAsignaturasAlumno.addEventListener('delete', function(e) 
{
    //console.debug("recogemos:"+e.rowData.data);
    var Asignaturas = Alloy.Collections.Asignatura;
    Asignaturas.fetch();
    var model = Asignaturas.get(e.rowData.data);
    
    model.destroy();
    Asignaturas.remove(model);
    Asignaturas.fetch();
});

//--------------------------------




