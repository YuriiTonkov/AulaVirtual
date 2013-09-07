$.lblClases.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    
    var tabAlumnosController = Alloy.createController("WinAlumnos", {"IdClase":e.source.textid, "Nombre":e.source.text});
    
    Alloy.Globals.GrupoTab.activeTab.open(tabAlumnosController.getView());
    
});

$.lblClases.addEventListener("longpress", function(e){
    var colVWClases = Alloy.Collections.VW_Clases_Favoritas;
    var colClases = Alloy.createCollection("Clase");
    colClases.fetch();
    var model = colClases.get(e.source.textid);
    var dialog = Ti.UI.createAlertDialog({
            title: 'Introduzca nombre de la clase',
            style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
            buttonNames: ['Aceptar', 'Cancelar'],
            cancel: 1,
             });
        dialog.addEventListener('click', function(e){
           if (e.index === e.source.cancel){
     
            }else{
                
                model.set({Nombre: e.text});
                model.save();
                colClases.fetch();
                colVWClases.fetch();
            }
        });
        dialog.show();
    
    
});