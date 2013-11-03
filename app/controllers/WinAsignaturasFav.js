

//Elementos de Interfaz
$.WinAsignaturasFav.title = "Asignaturas Favoritas";
//$.WinClases.setRightNavButton($.addClase);

//-----------------------------------------


var asignaturas = Alloy.Collections.VW_Asignaturas_Favoritas;
asignaturas.fetch();

//Funciones--------------------------

function NombreAsignatura (model){
    var transform = model.toJSON();
    transform.nombrecompleto = transform.NombreAsignatura + " ("+ transform.NombreCurso + " "+ transform.NombreGrado +")";
    return transform;
}

function filtrado (collection){
    var coleccion_filtrada = collection.where({Favorita: 1});
    return coleccion_filtrada;
}




//-----------------------------------------

//Listeners-----------------------------

$.TablaAsignaturasFav.addEventListener('delete', function(e) 
{
    var colAsignatura = Alloy.createCollection("Asignatura");
    colAsignatura.updateFavorito(e.rowData.data, 0);
    colAsignatura.fetch();
    asignaturas.fetch();
    
});

$.WinAsignaturasFav.addEventListener('focus',function(e){
    //Ti.API.info('ENTRO EN EL FOCUS');
    var asignaturas = Alloy.Collections.VW_Asignaturas_Favoritas;
    asignaturas.fetch();
});


//--------------------------------

// Free model-view data binding resources when this view-controller closes
$.WinAsignaturasFav.addEventListener('close', function() {
    $.destroy();
});