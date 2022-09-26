let lodging_type2;
$('._dkkqb8').on('click',function(){
    $('._28hxjy8').attr("class", "_dkkqb8");
    $(this).attr("class","_28hxjy8");
    $(this).attr("class","_28hxjy8");
    lodging_type2 = $(this).find('._19uq0tn').text();
});

$("._dkkqb8").click(function(){
    $("._1ku51f04").removeAttr("disabled");
});

// 이전 버튼 클릭시 이전 페이지로 이동
$('._za4ekfm').click(function (){
    location.href='/pages/hostoption2/'+parseInt($('#iddiv').text());
})

$("._1ku51f04").on('click', function(){
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: parseInt($('#iddiv').text()),
            lodgingType2: lodging_type2
        }
    }

    $.post({
        url: '/api/room/hostoption3',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            location.href='/pages/hostoption4';
        },
        error: function(){
            location.reload();
        }
    });
});