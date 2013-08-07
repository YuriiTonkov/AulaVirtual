var grados = Alloy.Collections.Grado;
grados.fetch();

$.winGrados.addEventListener('focus',function(e){
    // Ti.API.info('ENTRO EN EL FOCUS');
    if (Ti.App.Properties.getString('Ayuda')=='1'){
        //Creamos la ayuda que saldrá en caso de estar activada
            var alertDialog = Ti.UI.createAlertDialog({
                title: "Ayuda",
                message: "En esta pantalla se pueden visualizar los Grados disponibles de acuerdo a la LOCE",
                buttonNames: ['OK'],
                cancel:0
            });
            alertDialog.show();
    }
});


