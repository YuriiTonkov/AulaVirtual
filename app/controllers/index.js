$.GrupoTab.open();
Alloy.Globals.GrupoTab = $.GrupoTab;
Ti.App.Properties.setString("Ayuda", 0);

var btnGuardar = Ti.UI.createButton({title: 'Alta',style:Ti.UI.iPhone.SystemButton.SAVE});
var btnLogin = Ti.UI.createButton({title: 'Login',style:Ti.UI.iPhone.SystemButton.SAVE});

if (Ti.App.Properties.getString('Login')==undefined){
   var window = Titanium.UI.createWindow({title:"Nuevo usuario",backgroundImage:"backGround320x416.png"});
   window.open({modal:true, modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL, modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET});
    
    var lblLogin = Titanium.UI.createLabel({color:"#000",text:"Usuario:",top:60,left:35,width:100,height:'auto',font: {fontSize:"15", fontFamily:"Comic Zine OT"}});
    var lblPass = Titanium.UI.createLabel({color:"#000",text:'Contraseña:',top:130,left:35,width:140,height:'auto',font: {fontSize:"15", fontStyle:'italic',fontFamily:"Helvetica Neue"}});
    var lblEmail = Titanium.UI.createLabel({color:"#000",text:'Email:',top:200,left:35,width:100,height:'auto',font: {fontSize:"15", fontStyle:'italic',fontFamily:"Helvetica Neue"}});
    var txtLogin = Titanium.UI.createTextField({top:90,left:35,width:240,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});
    var txtPass = Titanium.UI.createTextField({top:160,left:35,width:240, passwordMask:"true", borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});
    var emailField = Titanium.UI.createTextField({top:230,left:35, width:240,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});

    window.add(lblLogin);
    window.add(lblPass);
    window.add(lblEmail)
    window.add(txtLogin);
    window.add(txtPass);
    window.add(emailField);
    window.setRightNavButton(btnGuardar);
   
}else{
    var window = Titanium.UI.createWindow({title:"Login",backgroundImage:"backGround320x416.png"});
    window.open({modal:true, modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL, modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET});
    
    var lblLogin = Titanium.UI.createLabel({color:"#000",text:"Usuario:",top:103,left:35,width:100,height:'auto',font: {fontSize:"15dp", fontFamily:"Comic Zine OT"}});
    var lblPass = Titanium.UI.createLabel({color:"#000",text:'Contraseña:',top:138,left:35,width:100,height:'auto',font: {fontSize:"15dp", fontStyle:'italic',fontFamily:"Helvetica Neue"}});
    var lblError = Titanium.UI.createLabel({color:"#f00", visible:"false", top:105,left:35,width:"100%",height:'auto',font: {fontSize:"15dp", fontStyle:'italic',fontFamily:"Helvetica Neue"}});
    var txtLogin = Titanium.UI.createTextField({top:100,left:140,width:130,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,font: {fontSize:"15dp", fontStyle:'italic',fontFamily:"Helvetica Neue"}});
    var txtPass = Titanium.UI.createTextField({top:135,left:140,width:130, passwordMask:"true", borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,font: {fontSize:"15dp", fontStyle:'italic',fontFamily:"Helvetica Neue"}});
    var lblAyuda = Titanium.UI.createLabel({color:"#000",text:'Ayuda activa:',top:173,left:35,width:100,height:'auto',font: {fontSize:"15dp", fontStyle:'italic',fontFamily:"Helvetica Neue"}});
    var chkAyuda = Titanium.UI.createSwitch({value:false, top:170, left:140, width:'40', height:'auto'});
    window.add(lblLogin);
    window.add(lblPass);
    window.add(lblError);
    window.add(lblAyuda);
    window.add(txtLogin);
    window.add(txtPass);
    window.add(chkAyuda);
   // window.add(emailField)
    window.setRightNavButton(btnLogin);
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
         window.close();
    }else
    {
        lblError.text = "Usuario/Contraseña incorrecta";
        lblError.visible= true;
    }
    
   
});

