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
$(".testbtn").click(function (e) {
    // alert("click");
    e.preventDefault();
    
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
    return false;
})