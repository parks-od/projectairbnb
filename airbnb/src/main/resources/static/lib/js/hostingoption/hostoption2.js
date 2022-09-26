// 항목 선택시 테두리
let lodging_type1;
$('._dkkqb8').on('click',function(){
    $('._28hxjy8').attr("class", "_dkkqb8");
    $(this).attr("class","_28hxjy8");
    lodging_type1 = $(this).find('._19uq0tn').text();
});
// 항목 선택시 다음 버튼 활성화
$("._dkkqb8").click(function(){
    $("._1ku51f04").removeAttr("disabled");
});

$("._1ku51f04").on('click', function(){

    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: parseInt($('#iddiv').text()),
            memId: parseInt($('#iddiv2').text()),
            lodgingType1: lodging_type1
        }
    }
    $.post({
        url: '/api/room/hostoption2',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            if(lodging_type1 == '아파트'){
                location.href='/pages/hostoption3_1';
            }else if(lodging_type1 == '주택'){
                location.href='/pages/hostoption3_2';
            }else if(lodging_type1 == '별채'){
                location.href='/pages/hostoption3_3';
            }else if(lodging_type1 == '독특한 숙소'){
                location.href='/pages/hostoption3_4';
            }else if(lodging_type1 == 'B&B'){
                location.href='/pages/hostoption3_5';
            }else if(lodging_type1 == '부티크 호텔'){
                location.href='/pages/hostoption3_6';
            }
        },
        error: function(){
            location.reload();
        }
    });
});

