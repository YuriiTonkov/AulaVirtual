

//Elementos de Interfaz
$.WinClasesFav.title = "Clases Favoritas";
//$.WinClases.setRightNavButton($.addClase);

//-----------------------------------------


var clases = Alloy.Collections.VW_Clases_Favoritas;
clases.fetch();

//Funciones--------------------------

function NombreClase (model){
    var transform = model.toJSON();
    transform.nombreCompleto = transform.NombreGrado + " "+ transform.NombreCurso + " " + transform.NombreClase;
    return transform
}

function filtrado (collection){
    var coleccion_filtrada = collection.where({Favorita: 1});
    return coleccion_filtrada;
}




//-----------------------------------------

//Listeners-----------------------------

$.TablaClases.addEventListener('delete', function(e) 
{
    var colClase = Alloy.createCollection("Clase");
    colClase.updateFavorito(e.rowData.data, 0);
    colClase.fetch();
    clases.fetch();
    
});

$.WinClasesFav.addEventListener('focus',function(e){
    // Ti.API.info('ENTRO EN EL FOCUS');
     var clase = Alloy.Collections.VW_Clases_Favoritas;
     clase.fetch();
});
//--------------------------------

// Free model-view data binding resources when this view-controller closes
$.WinClasesFav.addEventListener('close', function() {
    $.destroy();
});