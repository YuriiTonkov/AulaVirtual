$.lblEvaluacion.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    
    var tabEvaluacionesController = Alloy.createController("WinExamenes", {"IdEvaluacion":e.source.textid, "Nombre":e.source.text});
    
    Alloy.Globals.tabGroup.open(tabEvaluacionesController.getView());
    
});