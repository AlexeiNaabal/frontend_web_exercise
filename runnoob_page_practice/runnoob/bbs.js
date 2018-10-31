
$(document).ready(function(){
    function temporaryTime(){
        var date = new Date();
        $('span.time').text(date.toUTCString());
    }
    temporaryTime();

    function showInputBox(){
        var btnarea = document.getElementsByClassName('btnarea')[0];
        var btns = btnarea.getElementsByTagName('button');
        if(btns){
            for(var i = 0;i < btns.length;++i){
                if(btns[i]){
                    (function(n){
                        btns[n].onmousedown = function(){
                            // var inputArea = document.getElementsByClassName('inputform')[0];
                            console.log("down");
                            $('form.inputform').slideDown(100);
                        }
                        btns[n].onmouseup = function(){
                            $('form.inputform textarea').focus();
                        }
                    })(i)
                }
            }
        }
    }
    showInputBox();

    $('form.inputform textarea').blur(function(){
        console.log('up');
        $('form.inputform').slideUp(100);
    });

});