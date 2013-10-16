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

//Listeners -------------------------------------------------------------------------------------------------

$.txtNombreAsignatura.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca el nombre de la asignatura',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            //Ti.API.info('e.text: ' + e.text);
            if (e.index === e.source.cancel){
     
            }else{
                $.txtNombreAsignatura.value = e.text;
            }
        });
        dialog.show();
});

$.txtDescripcion.addEventListener("click", function(){
        var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca breve descripcion',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
            if (e.index === e.source.cancel){
     
            }else{
                $.txtDescripcion.value = e.text;
            }
        });
        dialog.show();
});
