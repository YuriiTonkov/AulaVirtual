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
    transform.nombreCompleto = "Grupo " + transform.Nombre;
    var alumnos = Alloy.Collections.Alumno;
    alumnos.fetch();
    var arrayAlumnos = alumnos.where({Clase:transform.IdClase});
    if (arrayAlumnos.length == "0"){transform.Alumnos="No hay alumnos";}
    else {
        var texto = "Hay " + arrayAlumnos.length + " alummos.";
        transform.Alumnos = texto; 
        }
    return transform;
}

function filtrado (collection){
    var coleccion_filtrada = collection.where({Curso: data.IdCurso});
    return coleccion_filtrada;
}

function NuevaClase (){
    var tabClasesController = Alloy.createController("NuevaClase", {"IdCurso":data.IdCurso, "Nombre":data.Nombre});
    Alloy.Globals.GrupoTab.activeTab.open(tabClasesController.getView());
    
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

$.WinClases.addEventListener('focus',function(e){
    // Ti.API.info('ENTRO EN EL FOCUS');
    if (Ti.App.Properties.getString('Ayuda')=='1'){
        //Creamos la ayuda que saldrá en caso de estar activada
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Ayuda",
                message: "En esta pantalla se pueden visualizar los grupos pertenecientes a "+data.Nombre+". A través de esta tabla se puede acceder a los diferentes Alumnos de cada grupo.",
                buttonNames: ['OK'],
                cancel:0
            });
            alertDialog.show();
    }
});

//--------------------------------

// Free model-view data binding resources when this view-controller closes
$.WinClases.addEventListener('close', function() {
    $.destroy();
});