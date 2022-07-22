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
$('._1yf4i4f').on("change",function(){
    $("#wjwkd7").attr("disabled", false)
})


/*------------------------------------------------------------------------------------*/

/*맞춤숙박 기간 수정하기 버튼 눌렀을 때*/ 
$('#su8').on('click',function(){
    $('#first_8').attr('class', 'first_8');
    $('#susu8').attr('class', 'susu8 _kkkkkkk');
})
/*맞춤숙박 기간 닫기 버튼 눌렀을 때*/ 
$('#ekerl8').on('click',function(){
    $('#first_8').attr('class', 'first_8 _kkkkkkk');
    $('#susu8').attr('class', 'susu8');
    $("#wjwkd8").attr("disabled", true)
})
/*맞춤숙박 기간 취소 버튼 눌렀을 때*/ 
$('#cnlth8').on('click',function(){
    $('#first_8').attr('class', 'first_8 _kkkkkkk');
    $('#susu8').attr('class', 'susu8');
    $("#wjwkd8").attr("disabled", true)
})
/*맞춤숙박 기간 셀렉트 저장버튼 활성 눌렀을 때*/ 
$('._1yf4i4f').on("change",function(){
    $("#wjwkd8").attr("disabled", false)
})
/*셀렉트 확인 */


/*맞춤숙박 기간 수정하기 버튼 눌렀을 때*/ 
$('#cnrkgkrl').on('click',function(){
    $('#first_9').attr('class', 'first_9');
    $('#first_8').attr('class', 'first_8 _kkkkkkk');
})
/*맞춤숙박 기간 삭제 버튼 눌렀을 때*/ 
$('#tkrwp').on('click',function(){
    $('#first_9').attr('class', 'first_9');
    $('#first_8').attr('class', 'first_8 _kkkkkkk');
})
/*맞춤숙박 기간 닫기 버튼 눌렀을 때*/ 
$('#ekerl9').on('click',function(){
    $('#first_9').attr('class', 'first_9 _kkkkkkk');
    $('#susu8').attr('class', 'susu8');
    $("#wjwkd9").attr("disabled", true)
})
/*맞춤숙박 기간 취소 버튼 눌렀을 때*/ 
$('#cnlth9').on('click',function(){
    $('#first_9').attr('class', 'first_9 _kkkkkkk');
    $('#susu8').attr('class', 'susu8');
    $("#wjwkd9").attr("disabled", true)
})

/*------------------------------------------------------------------------------------*/

/*최소숙박 기간 수정하기 버튼 눌렀을 때*/ 
$('#su10').on('click',function(){
    $('#first_10').attr('class', 'first_10');
    $('#susu10').attr('class', 'susu10 _kkkkkkk');
})
/*최소숙박 기간 닫기 버튼 눌렀을 때*/ 
$('#ekerl10').on('click',function(){
    $('#first_10').attr('class', 'first_10 _kkkkkkk');
    $('#susu10').attr('class', 'susu10');
    $("#wjwkd10").attr("disabled", true)
})
/*최소숙박 기간 취소 버튼 눌렀을 때*/ 
$('#cnlth10').on('click',function(){
    $('#first_10').attr('class', 'first_10 _kkkkkkk');
    $('#susu10').attr('class', 'susu10');
    $("#wjwkd10").attr("disabled", true)
})
/*최소숙박 기간 셀렉트 저장버튼 활성 눌렀을 때*/ 
$('._yrzsibu').on("change",function(){
    $("#wjwkd10").attr("disabled", false)
})
/*셀렉트 확인 */


/*최소숙박 맞춤설정 버튼 눌렀을 때*/ 
$('#chlth').on('click',function(){
    $('#first_11').attr('class', 'first_11');
    $('#first_10').attr('class', 'first_10 _kkkkkkk');
})

/*최소숙박 맞춤설정 닫기 버튼 눌렀을 때*/ 
$('#ekerl11').on('click',function(){
    $('#first_11').attr('class', 'first_11 _kkkkkkk');
    $('#susu10').attr('class', 'susu10');
    $("#wjwkd11").attr("disabled", true)
})
/*최소숙박 맞춤설정 취소 버튼 눌렀을 때*/ 
$('#cnlth11').on('click',function(){
    $('#first_11').attr('class', 'first_11 _kkkkkkk');
    $('#susu10').attr('class', 'susu10');
    $("#wjwkd11").attr("disabled", true)
})
$('._c5rhl5').on("change",function(){
    $("#wjwkd11").attr("disabled", false)
})
/*------------------------------------------------------------------------------------*/

/*추가게스트 수정하기 버튼 눌렀을 때*/ 
$('#su12').on('click',function(){
    $('#first_12').attr('class', 'first_12');
    $('#susu12').attr('class', 'susu12 _kkkkkkk');
})
/*추가게스트 닫기 버튼 눌렀을 때*/ 
$('#ekerl12').on('click',function(){
    $('#first_12').attr('class', 'first_12 _kkkkkkk');
    $('#susu12').attr('class', 'susu12');
    $("#wjwkd12").attr("disabled", true)
})
/*추가게스트 취소 버튼 눌렀을 때*/ 
$('#cnlth12').on('click',function(){
    $('#first_12').attr('class', 'first_12 _kkkkkkk');
    $('#susu12').attr('class', 'susu12');
    $("#wjwkd12").attr("disabled", true)
})
/*추가게스트 셀렉트 저장버튼 활성 눌렀을 때*/ 
$('._1jg0g92a').on("change",function(){
    $("#wjwkd12").attr("disabled", false)
})


//여행자 게스트 숫자
function pCount1(){    
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val+1;
    if(val+1 > 0){
        $('#discount1').removeAttr("disabled")
    }  
}
function mCount1(){
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val-1;
    if((document.querySelector("#c1").innerText)==0){
        $('#discount1').attr("disabled","")
    }
}

/*------------------------------------------------------------------------------------*/
/* 반려 동물 수수료 팝업 */
/*반려 동물 수수료 수정하기 버튼 눌렀을 때*/ 
$('#pop22').on('click',function(){
    $('#first_13').attr('class', 'first_13');
})
/*반려 동물 수수료 닫기 버튼 눌렀을 때*/ 
$('#ekerl13').on('click',function(){
    $('#first_13').attr('class', 'first_13 _kkkkkkk');
    $("#wjwkd13").attr("disabled", true)
})
/*반려 동물 수수료 셀렉트 저장버튼 활성 눌렀을 때*/ 
$('#ghkftjd').on("change",function(){
    $("#wjwkd13").attr("disabled", false)
})

/*------------------------------------------------------------------------------------*/
/* 청소비 팝업 */
/*청소비 수정하기 버튼 눌렀을 때*/ 
$('#pop33').on('click',function(){
    $('#first_14').attr('class', 'first_14');
})
/*청소비 닫기 버튼 눌렀을 때*/ 
$('#ekerl14').on('click',function(){
    $('#first_14').attr('class', 'first_14 _kkkkkkk');
    $("#wjwkd14").attr("disabled", true)
})

/*청소비 단기숙박 버튼 활성 눌렀을 때*/ 
$('.first_17').on('click',function(){
    $('.first_17').attr('class', 'first_17 _kkkkkkk')
    $('.first_16').attr('class', 'first_16');
    $('.first_15').attr('class', 'first_15');

})
/*청소비 단기숙박 버튼 활성 눌렀을 때*/ 
$('.first_16').on('click',function(){
    $('.first_16').attr('class', 'first_16 _kkkkkkk')
    $('.first_17').attr('class', 'first_17');
    $('.first_15').attr('class', 'first_15 _kkkkkkk');

})


/*------------------------------------------------------------------------------------*/
/* 피드백 팝업 */
/*피드백 버튼 눌렀을 때*/ 
$('#popup44').on('click',function(){
    $('#first_18').attr('class', 'first_18');
})
/*피드백 닫기 버튼 눌렀을 때*/ 
$('#ekerl18').on('click',function(){
    $('.first_18').attr('class', 'first_18 _kkkkkkk');
    $("#button642").attr("disabled", true)
})
/*피드백셀렉트 버튼 활성 눌렀을 때*/ 
$('._1fnnolo').on("change",function(){
    $("#button642").attr("disabled", false)
})


/*------------------------------------------------------------------------------------*/

/*스마트요금 수정하기 버튼 눌렀을 때*/ 
$('#su19').on('click',function(){
    $('#first_19').attr('class', 'first_19');
    $('#susu19').attr('class', 'susu19 _kkkkkkk');
})
/*스마트요금 닫기 버튼 눌렀을 때*/ 
$('#ekerl19').on('click',function(){
    $('#first_19').attr('class', 'first_19 _kkkkkkk');
    $('#susu19').attr('class', 'susu19');
    $("#wjwkd19").attr("disabled", true)
})
/*스마트요금 취소 버튼 눌렀을 때*/ 
$('#cnlth19').on('click',function(){
    $('#first_19').attr('class', 'first_19 _kkkkkkk');
    $('#susu19').attr('class', 'susu19');
    $("#wjwkd12").attr("disabled", true)
})

/*스마트요금 수정하기 버튼 눌렀을 때*/ 
$('#bu_20').on('click',function(){
    $('#first_19').attr('class', 'first_19 _kkkkkkk');
    $('#susu19').attr('class', 'susu19 _kkkkkkk');
    $('#first_20').attr('class', 'first_20');
})
/*스마트요금 수정하기 버튼 눌렀을 때*/ 
$('#bu_21').on('click',function(){
    $('#first_20').attr('class', 'first_20 _kkkkkkk');
    $('#susu19').attr('class', 'susu19 _kkkkkkk');
    $('#first_19').attr('class', 'first_19');
})


/*스마트요금 닫기 버튼 눌렀을 때*/ 
$('#ekerl20').on('click',function(){
    $('#first_20').attr('class', 'first_20 _kkkkkkk');
    $('#susu19').attr('class', 'susu19');
    $("#wjwkd20").attr("disabled", true)
})
/*스마트요금 취소 버튼 눌렀을 때*/ 
$('#cnlth20').on('click',function(){
    $('#first_20').attr('class', 'first_20 _kkkkkkk');
    $('#susu19').attr('class', 'susu19');
    $("#wjwkd12").attr("disabled", true)
})


