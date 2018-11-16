function addLoadEvent(func) {
    var old = window.onload;
    if (typeof (window.onload) != 'function') {
        window.onload = func();
    } else {
        window.onload = function () {
            old();
            func();
        }
    }
}

function lbt() {

    var container = document.getElementsByClassName('container');
    var timer;

    
    var prev = document.getElementsByClassName('prev')[0];
    var next = document.getElementsByClassName('next')[0];
    var list = document.getElementsByClassName('list')[0];
    
    var animated = false;
    function animate(offset) {
        var time = 300;
        var interval = 10;
        var speed = offset / (time / interval);
        animated = true;
        var curLeft = parseInt(list.style.left);
        var newLeft = parseInt(list.style.left) + offset;
        
        function go() {
            if ((parseInt(list.style.left) < newLeft && speed > 0) || (parseInt(list.style.left) > newLeft && speed < 0)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            } else {
                animated = false;
                list.style.left = newLeft + 'px';
                if (newLeft > -600) {
                    list.style.left = -3000 + 'px';
                }
                if (newLeft < -3000) {
                    list.style.left = -600 + 'px';
                }
            }
        }
        go();
    };
    
    var buttons = document.getElementsByClassName('buttons')[0].getElementsByTagName('span');
    var index = 1;

    for (var i = 0; i < buttons.length; ++i) {
        buttons[i].onclick = function () {
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -600 * (myIndex - index);
            if (!animated) {
                animate(offset);
            }
            index = myIndex;
            showButton();
            
        }
    }
    
    function showButton() {
        for (var i = 0; i < buttons.length; ++i) {
            buttons[i].className = "";
        }
        buttons[index - 1].className = 'on';
    }
    prev.onclick = function () {
        if (!animated) {
            if (index == 1) {
                index = 5;
            } else {
                index -= 1;
            }
            showButton();
            animate(600);
        }
    };
    next.onclick = function () {
        if (!animated) {
            if (index == 5) {
                index = 1;
            } else {
                index += 1;
            }
            showButton();
            animate(-600);
        }
    };
    
    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 2000);
    
    }
    
    function stop() {
        clearInterval(timer);
    }
    play();
    container.onmouseover = stop;
    container.onmouseout = play;
}

addLoadEvent(lbt);