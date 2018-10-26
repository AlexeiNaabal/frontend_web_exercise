var cnt = 0;
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
    ++cnt;
}

function showSideDiv(itemClassName, listToShow){
    if(!document.getElementById && !document.getElementsByTagName && !document.getElementsByClassName){
        return false;
    }
    var elem = document.getElementsByClassName(itemClassName);
    var i = 0;
    console.log(elem);
    for(i;i < elem.length;++i){
        (function (n){
            if(elem[n] !== 'undefined'){
                var elemListToShow = elem[n].getElementsByClassName(listToShow)[0];
                if(typeof(elemListToShow) !== 'undefined'){
                    elem[n].onmouseover = function(e){
                        var rel = e.relatedTarget;
                        var cmp = this.compareDocumentPosition(rel);
                        if((cmp == 20 || cmp == 0)){
                            return;
                        }
                        
                        // console.log(elemListToShow);
                        elemListToShow.style.display = "block";
                        fadeIn(itemClassName, listToShow, 10, n);
                    }
                    elem[n].onmouseout = function(e){
                        var rel = e.relatedTarget;
                        var cmp = this.compareDocumentPosition(rel);
                        if(cmp>=2 && cmp <= 10){
                            // console.log("should fadeout");
                            elemListToShow.style.display = "none";
                            elemListToShow.style.opacity = 0;
                            // fadeOut(listToShow, 5);
                        }
                    }
                }
            }
        })(i);
    }
}

function fadeIn(listName, elemName, duration, nth_child){
    var list = document.getElementsByClassName(listName)[nth_child];
    var elem = list.getElementsByClassName(elemName)[0];
    if(!elem.style.opacity){
        elem.style.opacity = 0;
    }
    var newOpacity = parseFloat(elem.style.opacity);
    if(fadeIn.changeOp){
        clearTimeout(fadeIn.changeOp);
    }
    if(newOpacity > 1){
        return true;
    }
    newOpacity += 0.05;
    elem.style.opacity = newOpacity;
    var repeat = "fadeIn('"+listName+"','"+elemName+"',"+duration+","+nth_child+")";
    fadeIn.changeOp = setTimeout(repeat, duration);
}

function fadeOut(elemName, duration){
    var elem = document.getElementsByClassName(elemName)[0];
    if(!elem.style.opacity){
        elem.style.opacity = 0;
    }
    var newOpacity = parseFloat(elem.style.opacity);
    // console.log(newOpacity);
    if(newOpacity <= 0){
        elem.style.display = "none";
        clearTimeout(fadeOut.changeOp);
        return true;
    }

    newOpacity -= 0.05;
    elem.style.opacity = newOpacity;
    var repeat = "fadeOut('"+elemName+"',"+duration+")";
    fadeOut.changeOp = setTimeout(repeat, duration);
}

// addOnloadEvent(showSideDiv);
showSideDiv('firstlistclass', 'secondlist');