var data = {
    "books": [{
            "language": "A",
            "edition": "1st"
        },
        {
            "language": "B",
            "lastname": "2nd"
        },
        {
            "language": "C",
            "lastname": "3rd"
        }
    ]
}

function onPost(){
    var comment = $("#test").val();
    console.log($("#test"));
    if (!comment) {
        console.log("false");
        return false;
    } else {
        info = {"test": comment,"hold": data}
        // $.post("http://127.0.0.1:183", info, function(response){
        //     // console.log(response);
        //     if(!response.success){
        //         console.log(response);
        //     }
        // }, 'json');
        $.ajax({
            url: "http://127.0.0.1:183",
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(info),
            success: function (result) {
                console.log(result);
                // alert(result);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            },
            complete(XMLHttpRequest, textStatus){
                console.log("complete:");
                // console.log(textStatus);
            }
        });
    }
}

function onGet(){
    $.ajax({
        url: 'http://127.0.0.1:183',
        type: 'GET',
        dataType: 'json',
        success: function(responseText){
            // console.log(responseText)
        },
        complete: function(result){
            // console.log(result);
            res = $.parseJSON(result.responseText);
            var i = 0;
            for(; i < res.hold.books.length;++i){
                (function(i){
                    var appending = appendpre + res.test + ': ' + res.hold.books[i]['language'] + ',' + res.hold.books[i]['lastname'] + appendpost;

                    $('body').append(appending);
                })(i);
            }
            $('.cmtbtn').click(function(){
                var subappend = '<form><textarea name="textsubmitted" id="test"></textarea></form><br><button class="cmtbtn">Comment</button><hr>'
                // var input1 = $('.testbtn').clone();
                // var input2 = $('.reqbtn').clone();
                // $(".appended").on("click", ".testbtn", onPost());
                // $(".appended").on("click", ".reqbtn", onGet());
                $(this).parent().append(subappend);
                
            });
        }
    });
    return false;
};

$(".testbtn").click(onPost);

//appendstyle = 'style="width:100%;"'
appendpre = '<span class="appended">';
appendpost = '</span><br>';
$('.reqbtn').click(onGet);
