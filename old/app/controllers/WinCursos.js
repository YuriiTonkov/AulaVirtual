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




