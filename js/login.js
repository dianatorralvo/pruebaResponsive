function ir(){

    var contrasena="Kuepa2022";
    var user="Admin";
    
    if(document.form.password.value==contrasena && document.form.usuario.value==user){
        window.location="dashboard.html";}
    else{
        swal("Escribe nombre de usuario y contrasena correctamente");
    }
    
    }