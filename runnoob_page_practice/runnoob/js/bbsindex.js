$(document).ready(function(){
    console.log("ready");
    $.ajax({
        url: 'data/user.json',
        type: 'post',
        dataType: 'json',
        success: function(result){
            // console.log(result);
            process(result);
        },
        error: function(result){
            console.log(result);
        }
    });

    function process(result){
        var name = result.name;
        console.log(name[0]);
        var i = 0;
        while(i < name.length){
            var date = new Date();
            $('.usertext').append('<span>'+name[i]+' posted: '+'</span>'
            +'<span> at:'+result.time[i]+'</span>'+'<br>'+
            '<p>'+result.content[i]+'</p>'+'<hr>');
            ++i;
        }
    }

});