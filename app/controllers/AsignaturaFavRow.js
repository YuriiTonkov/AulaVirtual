$.tblAsignaturaRow.addEventListener('click',function(e){
    var tabAsignaturasController = Alloy.createController("WinAlumnosAsignatura", {"IdAsignatura":e.source.textid, "Nombre":e.source.text});
   Alloy.Globals.GrupoTab.activeTab.open(tabAsignaturasController.getView());
   
});