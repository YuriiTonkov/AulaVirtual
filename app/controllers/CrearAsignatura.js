var arg1 = arguments[0] || {};
var data = [];
data = arg1;

//Elementos de Interfaz
$.winCrearAsignatura.title = data.Nombre;
$.winCrearAsignatura.setRightNavButton($.btnGuardar);

function GuardarAsignatura(){
    
            var Asignatura = Alloy.createModel('Asignatura',{Nombre:$.txtNombreAsignatura.value, Curso:data.IdCurso, Descripcion:$.txtDescripcion.value, Optativa:($.swtOptativa.value?1:0)});
            var coleccionAsignaturas = Alloy.Collections.Asignatura;
            coleccionAsignaturas.add(Asignatura);
            Asignatura.save();
            coleccionAsignaturas.fetch();
            $.winCrearAsignatura.close();
    
}