var arg1 = arguments[0] || {};
var data = [];
data = arg1;

function filtrado (collection){
    var coleccion_filtrada = collection.where({Grado: data.IdGrado});
    return coleccion_filtrada;
    
}

function transform(model){
    var transform = model.toJSON();
    var colGrupos = Alloy.Collections.Clase;
    colGrupos.fetch();
    var arrayGrupos = colGrupos.where({Curso:transform.IdCurso});
    if (arrayGrupos.length==0){transform.Grupos="No hay grupos creados";}
    else {
        var texto = "Grupos ";
        for (var i=0;i<arrayGrupos.length;i++){
            var modelo = arrayGrupos[i].toJSON();
            if (texto=="Grupos "){texto=texto + modelo.Nombre}
            else {
                texto = texto + ", " + modelo.Nombre;
            }
        }
       transform.Grupos = texto; 
    }
    return transform;
}



$.WinCursos.addEventListener('focus',function(e){
    // Ti.API.info('ENTRO EN EL FOCUS');
    $.WinCursos.title = data.NombreGrado;
    var cursos = Alloy.Collections.Curso;
    cursos.fetch();
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

// Free model-view data binding resources when this view-controller closes
$.WinCursos.addEventListener('close', function() {
    $.destroy();
});

