let lodging_type3;
$('._dkkqb8').on('click',function(){
    $('._28hxjy8').attr("class", "_dkkqb8");
    $(this).attr("class","_28hxjy8");
    $(this).attr("class","_28hxjy8");
    lodging_type3 = $(this).find('._19uq0tn').text();
});

$("._dkkqb8").click(function(){
    $("._1ku51f04").removeAttr("disabled");
});

$("._1ku51f04").on('click', function(){
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: parseInt($('#iddiv').text()) ,
            lodgingType3: lodging_type3
        }
    }

    $.post({
        url: '/api/room/hostoption4',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            location.href='/pages/hostoption5';
        },
        error: function(){
            location.reload();
        }
    });
});