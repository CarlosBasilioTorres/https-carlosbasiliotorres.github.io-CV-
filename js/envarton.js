let mes = new Date().getMonth();
let year = new Date().getFullYear();
let theme = 0;

/*
    area general
*/

//calendario simple
function decoderMonth(monthName){

    switch(monthName){
        case "Enero":
            return 0;
            break;
        case "Febrero":
            return 1;
            break;
        case "Marzo":
            return 2;
            break;
        case "Abril":
            return 3;
            break;
        case "Mayo":
            return 4;
            break;
        case "Junio":
            return 5;
            break;
        case "Julio":
            return 6;
            break;
        case "Agosto":
            return 7;
            break;
        case "Septiembre":
            return 8;
            break;
        case "Octubre": 
            return 9;
            break;
        case "Noviembre":
            return 10;
            break;
        case "Diciembre":
            return 11;
            break;
    }
}


function recalculaFecha(){
    
    let newValue = parseInt(document.getElementById("yearNumber").value);
    let newMonth = decoderMonth(document.getElementById("monthName").value);
    
    

    let newDate = new Date(newValue,newMonth,1);
    year = newValue;
    mes = newMonth;
    
    var primerDia = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
    var ultimoDia = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);

    generaSelectMonth(primerDia.getMonth());
    generaCalendario(newDate,primerDia,ultimoDia);
    calendarStyle();

    console.log(mes);

}

function valueMonth(mes){
    document.getElementById("monthName").value = month(mes);    
    recalculaFecha();
    closeMonthContainer();    
}

function valueYear(año){
    document.getElementById("yearNumber").value = año;    
    recalculaFecha();
    closeMonthContainer();    
}

function openMonthContainer(){
    document.getElementById("monthName").disabled = true;
    document.getElementById("container-months").style.display = 'block';
}

function closeMonthContainer(){
    document.getElementById("monthName").disabled = false;
    document.getElementById("container-months").style.display = 'none';
}

function generaSelectMonth(mes){
    let cadena = "";   
    cadena += "<div class='container-months' id='container-months'>";
    cadena += "<button class='close-btn' onclick='closeMonthContainer()'>X</button>"    
    for(let i = 0 ; i <= 11; i++){
        cadena += "<button onclick='valueMonth("+i+")'>"+month(i)+"</button>";
    }
    cadena += "</div>";
    return cadena;
}

function generaInputMonth(mes){
    let cadena = "<input id='monthName' value='"+month(mes)+"' onfocus='openMonthContainer()'>"
    return cadena;
}


function openYearContainer(){
    document.getElementById("yearNumber").disabled = true;
    document.getElementById("container-years").style.display = "block";
}

function closeYearContainer(){
    document.getElementById("yearNumber").disabled = false;
    document.getElementById("container-years").style.display = "none";
}

function generaSelectAños(){

    let actual = new Date().getFullYear();
    let primerAño = actual - 4;
    let ultimoAño = actual + 4;


    let cadena = "";
    cadena += "<div class='container-years' id='container-years'>";
    cadena += "<button class='close-btn' onclick='closeYearContainer()'>X</button>"    

    for(let i = primerAño ; i <= ultimoAño; i++){
        cadena += "<button onclick='valueYear("+i+")'>"+i+"</button>";
    }
    cadena += "</div>";

    return cadena;
}


function generaInputAños(year){    
    let cadena = "<input id='yearNumber' value='"+year+"' onfocus='openYearContainer()'>";
    return cadena;
}

function semana(week){
    switch(week){
        case 0:
            return "uno"
            break;
        case 1:
            return "dos"
            break;
        case 2:
            return "tres"
            break;
        case 3:
            return "cuatro"
            break;
        case 4:
            return "cinco"
            break;
    }
}
function dia(valor){
    switch(valor){
        case 1:
            return "monday"
            break;
        case 2:
            return "tuesday"
            break;
        case 3:
            return "wednesday"
            break;
        case 4:
            return "thursday"
            break;
        case 5:
            return "friday"
            break;
        case 6:
            return "saturday"
            break;
        case 0:
            return "sunday"
            break;
    }
}
 
function month(dato = 1){
    switch(dato){
        case 0:
            return "Enero";
            break;
        case 1:
            return "Febrero";
            break;
        case 2:
            return "Marzo";
            break;
        case 3:
            return "Abril";
            break;
        case 4:
            return "Mayo";
            break;
        case 5:
            return "Junio";
            break;
        case 6:
            return "Julio";
            break;
        case 7:
            return "Agosto";
            break;
        case 8:
            return "Septiembre";
            break;
        case 9: 
            return "Octubre";
            break;
        case 10:
            return "Noviembre";
            break;
        case 11:
            return "Diciembre";
            break;
    }
}


/*fin del area general*/
function siguiente(){

    console.log("mes actual: " + mes);
    mes++;

    if(mes <= 11 ){
        newDate = new Date(year,mes,1);           
    }else{        
        mes = 0;
        year++;
        newDate = new Date(year,mes,1);                   
    }
    
    var primerDia = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
    var ultimoDia = new Date(newDate.getFullYear(), newDate.getMonth() + 1,0);

    generaCalendario(newDate,primerDia,ultimoDia);
    calendarStyle();

}


function anterior(){
    today = new Date();    
    mes--;    
    if(mes >= 0){
        newDate = new Date(year,mes,1);           
    }else{
        mes = 12;
        year--;
        newDate = new Date(year,mes,1);   
    }
    
    var primerDia = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
    var ultimoDia = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);

    generaCalendario(newDate,primerDia,ultimoDia);
    calendarStyle();

}

 
function generaNumeracion(primerDia,ultimoDia){
    
    let inicio = primerDia.getDay();
    let fin = ultimoDia.getDate();
    
    let week = 0;
    let contadorDia = 1;

    while(week <= 4){
        if(contadorDia <= fin){
            document.getElementById(dia(inicio)+semana(week)).innerHTML=contadorDia;
        }
        
        contadorDia++;
        inicio++;

        if(inicio == 7 ){
            week++;
            inicio = 0;
        }
    }
}




function generaCalendario(today,primerDia,ultimoDia){        
    let modificacion = "<div id='container'>";
    modificacion += generaSelectMonth();
    modificacion += generaSelectAños();
    modificacion += "<div id='month'><button class='prev button' onClick='anterior();'><<</button><div class='month-container'>"+generaInputMonth(today.getMonth())+generaInputAños(today.getFullYear())+"</div><button class='next button' onClick='siguiente();'>>></button></div>";
    modificacion += "<div class='weekNames'><div class='nameDay'>D</div><div class='nameDay'>L</div><div class='nameDay'>M</div><div class='nameDay'>M</div><div class='nameDay'>J</div><div class='nameDay'>V</div><div class='nameDay'>S</div></div>";
    modificacion += "<div class='days'>"
    for(let i=0;i < 5;i++)
    {
        modificacion += "<div class='week'>"
        for(let j=0; j<=6; j++){
            modificacion += "<div class='day' id='"+dia(j)+semana(i)+"'></div>";
        }
        modificacion += "</div>"
    }

    modificacion += "</div></div>"
    document.getElementById("app").innerHTML = modificacion;

    generaNumeracion(primerDia,ultimoDia)
};


function calendarStyle(){
    let days = document.getElementsByClassName("day");
    let button = document.getElementsByClassName("button"); 
    

    switch(theme){
        case 0:
            break;
        case 1:
            document.getElementById("container-calendar").style.background = "black";
            document.getElementById("container-calendar").style.color = 'white';
            document.getElementById("monthName").style.color = "white";
            document.getElementById("monthName").style.background = "black";

            document.getElementById("yearNumber").style.color = "white";
            document.getElementById("yearNumber").style.background = "black";

            Array.prototype.forEach.call(days,function(el){
                el.style.border = "1px solid white";
            }); 

            Array.prototype.forEach.call(button,function(el){
                el.style.color = "white";
            });
            break;
    }
}




function calendar(container = {}){
    if(container.square){
        document.getElementById("container-calendar").style.width = container.dimension;
        document.getElementById("container-calendar").style.height = container.dimension;        
    }else{        
        document.getElementById("container-calendar").style.width = container.width;
        document.getElementById("container-calendar").style.height = container.height;        
    }
    
    
    var today = new Date();
    
    var primerDia = new Date(today.getFullYear(), today.getMonth(), 1);
    var ultimoDia = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    generaCalendario(today,primerDia,ultimoDia);    
    theme = container.style;    
    calendarStyle();
}
