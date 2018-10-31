
function addOnloadEvent(func){
    var oldOnload = window.onload;
    if(typeof(window.onload) != 'function'){
        if(typeof(func) == 'function'){
            window.onload = func();
        }
    }
    else{
        if(typeof(func) == 'function'){
            window.onload = function(){
                oldOnload();
                func();
            }
        }
    }
}