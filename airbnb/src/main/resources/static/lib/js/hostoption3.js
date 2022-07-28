let lodging_type2;
$('._dkkqb8').on('click',function(){
    $('._28hxjy8').attr("class", "_dkkqb8");
    $(this).attr("class","_28hxjy8");
    $(this).attr("class","_28hxjy8");
    lodging_type2 = $(this).find('._19uq0tn').text();
    alert(lodging_type2);
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
            lodgingId: 1,
            lodgingType2: lodging_type2
        }
    }

    $.post({
        url: '/api/room/hostoption3',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            alert('등록성공!');
            location.href='/pages/hostoption4';
        },
        error: function(){
            alert('등록실패!');
            location.reload();
        }
    });
});