$.lblAsignatura.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    
    var tabAsignaturasController = Alloy.createController("WinEvaluacion", {"IdAlumnoAsignatura":e.source.textid, "Nombre":e.source.text});
    
    Alloy.Globals.tabGroup.open(tabAsignaturasController.getView());
    
});