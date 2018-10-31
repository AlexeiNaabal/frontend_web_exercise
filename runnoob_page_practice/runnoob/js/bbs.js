
$(document).ready(function(){
    function temporaryTime(){
        var span = document.getElementsByClassName('time')[0];
        console.log(span);
        var date = new Date();
        span.innerHTML = date.toUTCString();
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
                            var inputArea = document.getElementsByClassName('inputform')[0];
                            $('form.inputform').slideToggle(100);
                            
                        }
                    })(i)
                }
            }
        }
    }
    function blurCallback(selector){
        console.log('blur');
        $(selector).hide();
    }
    
    $('form.inputform textarea').blur(function(){
        console.log('blur');
        $('form.inputform').slideUp(100);
    })
    showInputBox();

});