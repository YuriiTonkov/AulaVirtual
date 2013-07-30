var arg1 = arguments[0] || {};
var data = [];
data = arg1;

//Elementos de Interfaz
//$.WinClases.title = data.Nombre;
$.winNuevaClase.setRightNavButton($.btnGuardar);

function GuardarClase(){
    if ($.txtNombreClase.value == "") 
        {
            alert("Tiene que introducir un nombre de clase.")
        }
    else
        {
            var clase = Alloy.createModel('Clase',{Nombre:$.txtNombreClase.value, Curso:data.IdCurso});
            var coleccionClases = Alloy.Collections.Clase;
            coleccionClases.add(clase);
            clase.save();
            coleccionClases.fetch();
            $.winNuevaClase.close();
    }
}
