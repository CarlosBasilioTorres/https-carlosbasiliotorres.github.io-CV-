let items = 0;
let contador = 1;
let desplazamientos = [];

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

function previus(){
    for(let i = 0; i < items; i++){
        desplazamientos[i] -= 100;
        if(desplazamientos[i] == -300){
            desplazamientos[i] = 100;
        }
    }    

    
    for(let i = 0; i < items;i++){
        document.getElementById("item-" + (i+1)).style.left = desplazamientos[i] + "%";
    }

    console.table(desplazamientos)
}

function next(){    
    contador++;

    if(contador > items){
        contador = 1;
    }

    for(let i = 0; i < items;i++){
        desplazamientos[i] += 100;    
        if(desplazamientos[i] == 200){
            desplazamientos[i] = -200;
        }
    }
    
    for(let i = 0; i < items;i++){
        document.getElementById("item-" + (i+1)).style.left = desplazamientos[i] + "%";
        let aux = i+1;
        if(aux == contador){
            document.getElementById("item-"+(i+1)).style.opacity = 1;
        }else{
            document.getElementById("item-"+(i+1)).style.opacity = 0;
        }
    }
    
    console.table(desplazamientos)
}

function carrousel(datos = {}){
    items = datos.items;

    for(let i = 0; i < datos.items;i++){
        desplazamientos.push(-100 *i);
        if(desplazamientos[i] == -300){
            desplazamientos[i]=100;
        }
    }
    

    for(let i = 0; i < datos.items;i++){        
        document.getElementById("item-"+(i+1)).style.left = desplazamientos[i] + "%";
        let aux = i+1;
        if(aux == contador){
            document.getElementById("item-"+(i+1)).style.opacity = 1;
        }else{
            document.getElementById("item-"+(i+1)).style.opacity = 0;
        }
    }
}

