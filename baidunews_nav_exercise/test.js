var prevElem;
var currentElem;

function movement() {
    var list = document.getElementById("bar");
    var listelems = list.getElementsByClassName("item");

    prevElem = listelems[0];
    console.log(listelems);

    var i = 0;
    for (i; i < listelems.length; ++i) {

        (function (n) {
            listelems[n].onmouseover = function () {
                var width = parseInt(listelems[n].clientWidth);
                currentElem = listelems[n];
                console.log(width);
                var curX = currentElem.offsetLeft;
                var selectedbg = document.getElementsByClassName("item-select")[0];
                selectedbg.style.width = width + 'px';
                console.log(selectedbg.clientWidth);
                move("item-select", curX, width, 10);
            };
            listelems[n].onmouseout = function () {
                // console.log("leave");
                var prevX = prevElem.offsetLeft;
                var width = parseInt(prevElem.clientWidth);
                var selectedbg = document.getElementsByClassName("item-select")[0];
                selectedbg.style.width = width + 'px';
                
                move("item-select", prevX, width, 10);
            }
            listelems[n].onclick = function () {
                console.log("click " + n + listelems[n]);

                prevElem.style.backgroundColor = "";
                prevElem = listelems[n];
                listelems[n].style.backgroundColor = "#f40";
            };
        })(i);
    }
}

function move(elemID, final_x, width, interval) {
    var elem = document.getElementsByClassName(elemID)[0];
    // console.log(elem);
    if (elem.moveani) {
        clearTimeout(elem.moveani);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    if (xpos == final_x) {
        return true;
    }
    
    xpos < final_x ? xpos += Math.ceil((final_x - xpos) / 10) : xpos -= Math.ceil((xpos - final_x) / 10);
    elem.style.left = xpos + "px";

    var repeat = "move('" + elemID + "'," + final_x + "," + width + "," + interval + ")";
    elem.moveani = setTimeout(repeat, interval);
}
function addOnloadEvent(func){
    var oldOnload = window.onload;
    if(typeof(window.onload) != "function"){
        window.onload = func();
    }
    else{
        window.onload = function(){
            oldOnload();
            func();
        }
    }
}

addOnloadEvent(movement);