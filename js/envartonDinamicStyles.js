function showMobileMenu(){
    let menu = document.getElementsByClassName("container-sidenav");

    Array.prototype.forEach.call(menu, function(element){
        element.style.left = "0%";
        element.style.opacity = "1";
    });

    console.log(menu);  
}

function hideMobileMenu(){
    let menu = document.getElementsByClassName("container-sidenav");

    Array.prototype.forEach.call(menu, function(element){
        element.style.left = "-100%";
        element.style.opacity = "0";
    });

    console.log(menu);  
}



function envartonDinamicStyles(datos = {}){
    if(datos.carrousel){
        alert("encontre un carrusel");
    }else{
        alert("no encontre nada");
    }
}