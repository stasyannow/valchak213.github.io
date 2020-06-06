var dark_btn = document.getElementById("dark_btn");
var light_btn = document.getElementById("light_btn");

function DARK(el){
    if(light_btn != null){
        if(light_btn.style.display == "block"){
            light_btn.style.display = 'none';
        }
        else{
            light_btn.style.display = 'block';
            dark_btn.style.display = 'none';
        }
        return false;
    }
}

function LIGHT(el){
    if(dark_btn != null){
        if(dark_btn.style.display == "block"){
            dark_btn.style.display = 'none';
        }
        else{
            dark_btn.style.display = 'block';
            light_btn.style.display = 'none';
        }
        return false;
    }
}

var header = document.getElementById("headerID");
var headerL = document.getElementById("headerL");
var list = document.getElementById("list");
var aelements = list.getElementsByTagName("a");
var submnu = document.getElementById("submnu");

var leftB = document.getElementById("leftB");
var pelements = leftB.getElementsByTagName("p");

var footer = document.getElementById("footer");
var info = document.getElementById("info");
var h1 = document.getElementById("titleID");

var medicon = document.getElementById("medicon");
var divelements = medicon.getElementsByTagName("div");


function DARK_THEME(el){
    header.style.backgroundColor = "#000";
    headerL.style.color = "#fff";
    submnu.style.backgroundColor = "#000";
   
    for(i = 0; i <=aelements.length; i++){
        aelements[i].style.color = "#fff";
    }

}

function LIGHT_THEME(el){
    header.style.backgroundColor = "";
    headerL.style.color = "";
    submnu.style.backgroundColor = "";
   
     for(i = 0; i <=aelements.length; i++){
        aelements[i].style.color = "";
    }

}

function DARK_THEME1(el){
    leftB.style.backgroundColor = "#000";

    for(i = 0; i <=pelements.length; i++){
        pelements[i].style.color = "#fff";
    }
}

function LIGHT_THEME1(el){
    leftB.style.backgroundColor = "";

    for(i = 0; i <=pelements.length; i++){
        pelements[i].style.color = "";
    }
}

function DARK_THEME2(el){
    footer.style.backgroundColor = "#000";
    h1.style.color = "#fff";
    info.style.color = "#fff";

    for(i = 0; i <=divelements.length; i++){
        divelements[i].style.backgroundColor = "#fff";
    }

}

function LIGHT_THEME2(el){
    footer.style.backgroundColor = "";
    h1.style.color = "";
    info.style.color = "";

    for(i = 0; i <=divelements.length; i++){
        divelements[i].style.backgroundColor = "";
    }
}


dark_btn.addEventListener("click", DARK);
light_btn.addEventListener("click", LIGHT);

dark_btn.addEventListener("click", DARK_THEME);
dark_btn.addEventListener("click", DARK_THEME1);
dark_btn.addEventListener("click", DARK_THEME2);
light_btn.addEventListener("click", LIGHT_THEME);
light_btn.addEventListener("click", LIGHT_THEME1);
light_btn.addEventListener("click", LIGHT_THEME2);

