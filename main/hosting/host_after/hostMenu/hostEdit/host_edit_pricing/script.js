/*체크인 가능시간 수정하기 버튼 눌렀을 때*/ 
$('#su1').on('click',function(){
    $('#first_1').attr('class', 'first_1');
    $('#susu1').attr('class', 'susu1 _kkkkkkk');
})
/*체크인 가능시간 닫기 버튼 눌렀을 때*/ 
$('#ekerl1').on('click',function(){
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $('#susu1').attr('class', 'susu1');
    $("#wjwkd1").attr("disabled", true)
})
/*체크인 가능시간 닫기 버튼 눌렀을 때*/ 
$('#cnlth1').on('click',function(){
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $('#susu1').attr('class', 'susu1');
    $("#wjwkd1").attr("disabled", true)
})
/*체크인 셀렉트 버튼 눌렀을 때 저장버튼 활성*/ 
$('#select1').on("change",function(){
    $("#wjwkd1").attr("disabled", false)
})
/*------------------------------------------------------------------------------------*/

/*주말1박요금 수정하기 버튼 눌렀을 때*/ 
$('#su2').on('click',function(){
    $('#first_2').attr('class', 'first_2');
    $('#susu2').attr('class', 'susu2 _kkkkkkk');
})
/*주말1박요금 닫기 버튼 눌렀을 때*/ 
$('#ekerl2').on('click',function(){
    $('#first_2').attr('class', 'first_2 _kkkkkkk');
    $('#susu2').attr('class', 'susu2');
    $("#wjwkd2").attr("disabled", true)
})
/*주말1박요금닫기 버튼 눌렀을 때*/ 
$('#cnlth2').on('click',function(){
    $('#first_2').attr('class', 'first_2 _kkkkkkk');
    $('#susu2').attr('class', 'susu2');
    $("#wjwkd2").attr("disabled", true)
})
/*주말1박요금 버튼 눌렀을 때 저장버튼 활성*/ 
$('#weekend').on("change",function(){
    $("#wjwkd2").attr("disabled", false)
})

/*------------------------------------------------------------------------------------*/

/*최대숙박일수 수정하기 버튼 눌렀을 때*/ 
$('#su3').on('click',function(){
    $('#first_3').attr('class', 'first_3');
    $('#susu3').attr('class', 'susu3 _kkkkkkk');
})
/*최대숙박일수 닫기 버튼 눌렀을 때*/ 
$('#ekerl3').on('click',function(){
    $('#first_3').attr('class', 'first_3 _kkkkkkk');
    $('#susu3').attr('class', 'susu2');
    $("#wjwkd3").attr("disabled", true)
})
/*최대숙박일수 취소 버튼 눌렀을 때*/ 
$('#cnlth3').on('click',function(){
    $('#first_3').attr('class', 'first_3 _kkkkkkk');
    $('#susu3').attr('class', 'susu3');
    $("#wjwkd3").attr("disabled", true)
})
/*최대숙박일수 버튼 눌렀을 때 저장버튼 활성*/ 
$('#week3').on("change",function(){
    $("#wjwkd3").attr("disabled", false)
})
/*최대숙박일수 텍스트 입력시 저장버튼 활성 버튼*/
$('#xprtmxm3').on("change keydown paste textarea",function(){
    if($("#xprtmxm3").val()=='')
        $("#wjwkd3").attr("disabled", false)
})

/*------------------------------------------------------------------------------------*/

/*예약마감 수정하기 버튼 눌렀을 때*/ 
$('#su4').on('click',function(){
    $('#first_4').attr('class', 'first_4');
    $('#susu4').attr('class', 'susu4 _kkkkkkk');
})
/*예약마감 닫기 버튼 눌렀을 때*/ 
$('#ekerl4').on('click',function(){
    $('#first_4').attr('class', 'first_4 _kkkkkkk');
    $('#susu4').attr('class', 'susu4');
    $("#wjwkd4").attr("disabled", true)
})
/*예약마감 취소 버튼 눌렀을 때*/ 
$('#cnlth4').on('click',function(){
    $('#first_4').attr('class', 'first_4 _kkkkkkk');
    $('#susu4').attr('class', 'susu4');
    $("#wjwkd4").attr("disabled", true)
})
/*체크인 셀렉트 저장버튼 활성 눌렀을 때*/ 
$('#select4').on("change",function(){
    $("#wjwkd4").attr("disabled", false)
})
$('#select5').on("change",function(){
    $("#wjwkd4").attr("disabled", false)
})

/*------------------------------------------------------------------------------------*/

/*준비시간 수정하기 버튼 눌렀을 때*/ 
$('#su5').on('click',function(){
    $('#first_5').attr('class', 'first_5');
    $('#susu5').attr('class', 'susu5 _kkkkkkk');
})
/*준비시간 닫기 버튼 눌렀을 때*/ 
$('#ekerl5').on('click',function(){
    $('#first_5').attr('class', 'first_5 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd5").attr("disabled", true)
})
/*준비시간 취소 버튼 눌렀을 때*/ 
$('#cnlth5').on('click',function(){
    $('#first_5').attr('class', 'first_5 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd5").attr("disabled", true)
})
/*준비시간 셀렉트 저장버튼 활성 눌렀을 때*/ 
$('#select6').on("change",function(){
    $("#wjwkd5").attr("disabled", false)
})

/*------------------------------------------------------------------------------------*/

/*예약가능시간 수정하기 버튼 눌렀을 때*/ 
$('#su6').on('click',function(){
    $('#first_6').attr('class', 'first_6');
    $('#susu6').attr('class', 'susu6 _kkkkkkk');
})
/*예약가능시간 닫기 버튼 눌렀을 때*/ 
$('#ekerl6').on('click',function(){
    $('#first_6').attr('class', 'first_6 _kkkkkkk');
    $('#susu6').attr('class', 'susu6');
    $("#wjwkd6").attr("disabled", true)
})
/*예약가능시간 취소 버튼 눌렀을 때*/ 
$('#cnlth6').on('click',function(){
    $('#first_6').attr('class', 'first_6 _kkkkkkk');
    $('#susu6').attr('class', 'susu6');
    $("#wjwkd6").attr("disabled", true)
})
/*예약가능시간 셀렉트 저장버튼 활성 눌렀을 때*/ 
$('#select7').on("change",function(){
    $("#wjwkd6").attr("disabled", false)
})

/*------------------------------------------------------------------------------------*/

/*체크인 요일제한 수정하기 버튼 눌렀을 때*/ 
$('#su7').on('click',function(){
    $('#first_7').attr('class', 'first_7');
    $('#susu7').attr('class', 'susu7 _kkkkkkk');
})
/*체크인 요일제한 닫기 버튼 눌렀을 때*/ 
$('#ekerl7').on('click',function(){
    $('#first_7').attr('class', 'first_7 _kkkkkkk');
    $('#susu7').attr('class', 'susu7');
    $("#wjwkd7").attr("disabled", true)
})
/*체크인 요일제한 취소 버튼 눌렀을 때*/ 
$('#cnlth7').on('click',function(){
    $('#first_7').attr('class', 'first_7 _kkkkkkk');
    $('#susu7').attr('class', 'susu7');
    $("#wjwkd7").attr("disabled", true)
})
/*체크인 요일제한 셀렉트 저장버튼 활성 눌렀을 때*/ 
$('#select7').on("change",function(){
    $("#wjwkd6").attr("disabled", false)
})