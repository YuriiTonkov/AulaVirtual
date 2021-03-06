$.GrupoTab.open();
Alloy.Globals.GrupoTab = $.GrupoTab;
Ti.App.Properties.setString("Ayuda", 0);

var btnGuardar = Ti.UI.createButton({title: 'Alta',top:190, left:35,style:Ti.UI.iPhone.SystemButton.SAVE});
var btnLogin = Ti.UI.createButton({title: 'Login',top:210, left:"50%"-30 , width:60 , backgroundImage: "library/images/iphone/iconLogin.png", color: "e2effa"});

if (Ti.App.Properties.getString('Login')==undefined){
   var window = Titanium.UI.createWindow({title:"Nuevo usuario"});
   
   if (Titanium.Platform.displayCaps.platformHeight < 568){
   	window.backgroundImage="library/images/iphone/backGround640x920Login.png"; //Iphone 4
   }else{
   	window.backgroundImage="library/images/iphone/backGround640x1136Login.png"; //Iphone 5
   }
   
    window.open({modal:true, modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL, modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET});
    
    var txtLogin = Titanium.UI.createTextField({top:60,left:35,width:245,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "Usuario"});
    var txtPass = Titanium.UI.createTextField({top:110,left:35,width:245, passwordMask:"true", borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "Contraseña"});
    var emailField = Titanium.UI.createTextField({top:160,left:35, width:245,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED, hintText: "Email"});

    window.add(txtLogin);
    window.add(txtPass);
    window.add(emailField);
    window.add(btnGuardar);
   
}else{
    var window = Titanium.UI.createWindow({title:"Datos de Acceso"});//Titanium.Platform.displayCaps.platformHeight});
    
    if (Titanium.Platform.displayCaps.platformHeight < 568){
   	window.backgroundImage="library/images/iphone/backGround640x920Login.png"; //Iphone 4
   }else{
   	window.backgroundImage="library/images/iphone/backGround640x1136Login.png"; //Iphone 5
   }
   
    window.open({modal:true, modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL, modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET});
    
    var lblLogin = Titanium.UI.createLabel({color:"#000",text:"Usuario:",top:60,left:35,width:245,height:'auto',font: {fontSize:"15dp"}});
    var lblPass = Titanium.UI.createLabel({color:"#000",text:'Contraseña:',top:130,left:35,width:245,height:'auto',font: {fontSize:"15dp"}});
    var lblError = Titanium.UI.createLabel({color:"#f00", visible:"false", top:300,left:35,width:"100%",height:'auto',font: {fontSize:"15dp"}});
    var txtLogin = Titanium.UI.createTextField({top:90,left:35,width:245,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,font: {fontSize:"15dp"}});
    var txtPass = Titanium.UI.createTextField({top:160,left:35,width:245, passwordMask:"true", borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,font: {fontSize:"15dp"}});
    var lblAyuda = Titanium.UI.createLabel({color:"#000",text:'Ayuda activa:',top:250,left:65,width:100,height:'auto',font: {fontSize:"15dp"}});
    var chkAyuda = Titanium.UI.createSwitch({value:false, top:245, left:160, width:'40', height:'auto'});
    window.add(lblLogin);
    window.add(lblPass);
    window.add(lblError);
    window.add(lblAyuda);
    window.add(txtLogin);
    window.add(txtPass);
    window.add(chkAyuda);
   // window.add(emailField)
    window.add(btnLogin);
    txtLogin.value = Ti.App.Properties.getString('Login');
    
}


btnGuardar.addEventListener("click", function(){
    Ti.App.Properties.setString("Login",txtLogin.value);
    Ti.App.Properties.setString("Pass", txtPass.value);
    Ti.App.Properties.setString("Email", emailField.value);
    Ti.App.Properties.setString("Ayuda", 1);
    window.close();
});

btnLogin.addEventListener("click", function(){
    if ((Ti.App.Properties.getString('Login')==txtLogin.value) && (Ti.App.Properties.getString('Pass')==txtPass.value)){
         Ti.App.Properties.setString("Ayuda", chkAyuda.value);
         if (Ti.App.Properties.getString('UsuarioCloud')!=undefined){
		//Ya tiene usuario en la nube
				Cloud.Users.login({ 
		    	login: Ti.App.Properties.getString('Email'),
		    	password: "AulaVirtual"
				}, function(e) {
		    		if (e.success) {
		        		Ti.API.info("Logged in user, id = " + e.users[0].id + ", session ID = " + Cloud.sessionId);
		    		} else {
		        		Ti.API.info("Login failed.");
		    		}
				});
	}
         window.close();
    }
    else
    {
        lblError.text = "Usuario/Contraseña incorrecta";
        lblError.visible= true;
    }  
});


