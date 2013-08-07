var arg1 = arguments[0] || {};
var data = [];
data = arg1;

function filtrado (collection){
    var coleccion_filtrada = collection.where({Grado: data.IdGrado});
    return coleccion_filtrada;
    
}

$.WinCursos.title = data.NombreGrado;
var cursos = Alloy.Collections.Curso;
cursos.fetch();

$.WinCursos.addEventListener('focus',function(e){
    // Ti.API.info('ENTRO EN EL FOCUS');
    if (Ti.App.Properties.getString('Ayuda')=='1'){
        //Creamos la ayuda que saldrá en caso de estar activada
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Ayuda",
                message: "En esta pantalla se pueden visualizar los cursos pertenecientes a "+data.NombreGrado+". Se puede acceder a los diferentes grupos del curso o a través del detalle a las asignaturas existentes para ese curso.",
                buttonNames: ['OK'],
                cancel:0
            });
            alertDialog.show();
    }
});



