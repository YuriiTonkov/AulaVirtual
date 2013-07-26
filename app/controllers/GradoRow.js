$.lblGrado.addEventListener("click", function(e){
	console.debug("Añadimos el handler para el evento de click");
	
	var tabCursosController = Alloy.createController("WinCursos", {"IdGrado":e.source.textid, "NombreGrado":e.source.text});
	
	Alloy.Globals.tabGroup.open(tabCursosController.getView());
	
});