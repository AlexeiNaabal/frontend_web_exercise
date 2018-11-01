$(document).ready(function () {
    function temporaryTime() {
        var date = new Date();
        $('span.time').text(date.toUTCString());
    }
    temporaryTime();

    function showInputBox() {
        var btnarea = document.getElementsByClassName('btnarea')[0];
        var btns = btnarea.getElementsByTagName('button');
        if (btns) {
            for (var i = 0; i < btns.length; ++i) {
                if (btns[i]) {
                    (function (n) {
                        btns[n].onmousedown = function () {
                            // var inputArea = document.getElementsByClassName('inputform')[0];
                            console.log("down");
                            $('form.inputform').slideDown(100);
                        }
                        btns[n].onmouseup = function () {
                            $('form.inputform textarea').focus();
                        }
                    })(i)
                }
            }
        }
    }
    showInputBox();

    $('form.inputform textarea').blur(function () {
        console.log('up');
        $('form.inputform').slideUp(100);
    });

    var name = [];
    var level = [];
    var accountDuration = [];

    function userData() {
        //request user data, including "username", "level", "account last time"
        // console.log('userdata');
        var ifsuccess = false;
        $.ajax({
            url: 'data/user.json',
            type: 'post',
            dataType: 'json',
            success: function (result) {
                // console.log(result);
                name = result.name;
                // level = result.level;
                // accountDuration = result.accountDuration;

                processData();
            },
            error: function (result) {
                console.log(result.statusCode());
            }
        });

    }
    userData();

    function processData() {
        var floor = [];
        var cnt = 0;
        var parent = document.getElementsByClassName('section3')[0];
        // console.log(name.length);
        while (cnt < name.length) {
            var date = new Date();
            $.get('bbsbox.html', function (data) {
                $('.bbs').parent().append(data);
            });
            var div = parent.getElementsByClassName('test');
            console.log(div[0]);
            $('.time').text(date.toUTCString());
            ++cnt;
        }
    }
});