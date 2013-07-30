$.tblCursosRow.addEventListener("click", function(e){
    //console.debug("Añadimos el handler para el evento de click");
    if (e.detail==1){
        var tabNuevaAsignaturaController = Alloy.createController("winCrearAsignatura", {"Curso":e.source.data});
        Alloy.Globals.tabGroup.open(tabNuevaAsignaturaController.getView());
    }
    else{
        var tabClasesController = Alloy.createController("WinClases", {"IdCurso":e.source.textid, "Nombre":e.source.text});
        Alloy.Globals.tabGroup.open(tabClasesController.getView());
    }
});