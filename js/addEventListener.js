const form = document.getElementById("formID");
function COLOR_FORM(el){
    el.target.style.backgroundColor = "#969696";
}
function BLUR_COLOR(el){
    el.target.style.backgroundColor = "";
}
form.addEventListener("focus", COLOR_FORM, true);
form.addEventListener("blur", BLUR_COLOR, true);


const title_name = document.getElementById("regtitle");
function MOUSEOVER(){
    title_name.style.color = "#969696";
}
function MOUSEOUT(){
    title_name.style.color = "";
 }
title_name.addEventListener("mouseover", MOUSEOVER);
title_name.addEventListener("mouseout", MOUSEOUT);
