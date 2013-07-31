$.index.open();
var btnGuardar = Ti.UI.createButton({title: 'Alta',style:Ti.UI.iPhone.SystemButton.SAVE});
var btnLogin = Ti.UI.createButton({title: 'Login',style:Ti.UI.iPhone.SystemButton.SAVE});

if (Ti.App.Properties.getString('Login')==undefined){
   var window = Titanium.UI.createWindow({title:"Nuevo usuario",backgroundColor:"#fff"});
   window.open({modal:true, modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL, modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET});
    
    var lblLogin = Titanium.UI.createLabel({color:"#000",text:"Usuario:",top:15,left:5,width:100,height:'auto'});
    var lblPass = Titanium.UI.createLabel({color:"#000",text:'Contraseña:',top:60,left:5,width:100,height:'auto'});
    var lblEmail = Titanium.UI.createLabel({color:"#000",text:'Email:',top:105,left:5,width:100,height:'auto'});
    var txtLogin = Titanium.UI.createTextField({top:15,left:110,width:180,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});
    var txtPass = Titanium.UI.createTextField({top:60,left:110,width:180, passwordMask:"true", borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});
    var emailField = Titanium.UI.createTextField({top:105,left:110, width:180,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});
    
    window.add(lblLogin);
    window.add(lblPass);
    window.add(lblEmail)
    window.add(txtLogin);
    window.add(txtPass);
    window.add(emailField)
    window.setRightNavButton(btnGuardar);
}else{
    var window = Titanium.UI.createWindow({title:"Login",backgroundColor:"#fff"});
    window.open({modal:true, modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL, modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET});
    
    var lblLogin = Titanium.UI.createLabel({color:"#000",text:"Usuario:",top:15,left:5,width:100,height:'auto'});
    var lblPass = Titanium.UI.createLabel({color:"#000",text:'Contraseña:',top:60,left:5,width:100,height:'auto'});
    var lblError = Titanium.UI.createLabel({color:"#f00", visible:"false", top:105,left:5,width:"100%",height:'auto'});
    var txtLogin = Titanium.UI.createTextField({top:15,left:110,width:180,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});
    var txtPass = Titanium.UI.createTextField({top:60,left:110,width:180, passwordMask:"true", borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});
    //var emailField = Titanium.UI.createTextField({top:105,left:110, width:180,borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED});
    
    window.add(lblLogin);
    window.add(lblPass);
    window.add(lblError)
    window.add(txtLogin);
    window.add(txtPass);
   // window.add(emailField)
    window.setRightNavButton(btnLogin);
    txtLogin.value = Ti.App.Properties.getString('Login');
}


btnGuardar.addEventListener("click", function(){
    Ti.App.Properties.setString("Login",txtLogin.value);
    Ti.App.Properties.setString("Pass", txtPass.value);
    Ti.App.Properties.setString("Email", emailField);
    window.close();
});

btnLogin.addEventListener("click", function(){
    if ((Ti.App.Properties.getString('Login')==txtLogin.value) && (Ti.App.Properties.getString('Pass')==txtPass.value)){
         window.close();
    }else
    {
        lblError.text = "Usuario/Contraseña incorrecta";
        lblError.visible= true;
    }
    
   
});

