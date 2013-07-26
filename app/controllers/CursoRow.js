$.lblCurso.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    
    var tabClasesController = Alloy.createController("WinClases", {"IdCurso":e.source.textid, "Nombre":e.source.text});
    
    Alloy.Globals.tabGroup.open(tabClasesController.getView());
    
});