
// 항목 선택시 테두리
let lodging_type1;
$('._dkkqb8').on('click',function(){
    $('._28hxjy8').attr("class", "_dkkqb8");
    $(this).attr("class","_28hxjy8");
    lodging_type1 = $(this).find('._19uq0tn').text();
    alert(lodging_type1);
});

// 항목 선택시 다음 버튼 활성화
$("._dkkqb8").click(function(){
    $("._1ku51f04").removeAttr("disabled");
});

// 선택된 값 서버에 전송
$("._1ku51f04").on('click', function(){
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: 1,
            lodgingType1: lodging_type1
        }
    }
    console.log(jsonData)
    $.post({
        url: '/api/room/hostoption2',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            alert('등록성공!');
            location.href='/pages/hostoption3';
        },
        error: function(){
            alert('등록실패!');
            location.reload();
        }
    });
});



