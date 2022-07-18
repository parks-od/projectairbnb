
/*숙소제목 수정하기 버튼 눌렀을 때*/ 
$('#su1').on('click',function(){
    $('#first_1').attr('class', 'first_1');
    $('#susu1').attr('class', 'susu1 _kkkkkkk');
})
/*숙소제목닫기 버튼 눌렀을 때*/ 
$('#ekerl1').on('click',function(){
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $('#susu1').attr('class', 'susu1');
    $("#wjwkd1").attr("disabled", true)
})
/*숙소제목 취소 버튼 눌렀을 때*/ 
$('#cnlth1').on('click',function(){
    $('#first_1').attr('class', 'first_1 _kkkkkkk');
    $('#susu1').attr('class', 'susu1');
    $("#wjwkd1").attr("disabled", true)
})
/*숙소제목 저장버튼 활성 눌렀을 때*/ 
$('#dlsvnt1').on("change",function(){
    $("#wjwkd1").attr("disabled", false)
})
/*-------------------------------------------------- */
/*숙소설명 수정하기 버튼 눌렀을 때*/ 
$('#su2').on('click',function(){
    $('#first_2').attr('class', 'first_2');
    $('#susu2').attr('class', 'susu1 _kkkkkkk');
})
/*숙소설명닫기 버튼 눌렀을 때*/ 
$('#ekerl2').on('click',function(){
    $('#first_2').attr('class', 'first_2 _kkkkkkk');
    $('#susu2').attr('class', 'susu2');
    $("#wjwkd2").attr("disabled", true)
})
/*숙소설명 취소 버튼 눌렀을 때*/ 
$('#cnlth2').on('click',function(){
    $('#first_2').attr('class', 'first_2 _kkkkkkk');
    $('#susu2').attr('class', 'susu2');
    $("#wjwkd2").attr("disabled", true)
})
/*숙소설명 텍스트 작성 시 저장 활성 */ 
$('._159914b').on("change",function(){
    $("#wjwkd2").attr("disabled", false)
})


/*-------------------------------------------------- */
//게스트 수
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


/*-------------------------------------------------- */
/*숙소설명 수정하기 버튼 눌렀을 때*/ 
$('#su3').on('click',function(){
    $('#first_3').attr('class', 'first_3');
    $('#susu3').attr('class', 'susu1 _kkkkkkk');
})
/*숙소설명닫기 버튼 눌렀을 때*/ 
$('#ekerl3').on('click',function(){
    $('#first_3').attr('class', 'first_3 _kkkkkkk');
    $('#susu3').attr('class', 'susu3');
    $("#wjwkd3").attr("disabled", true)
})
/*숙소설명 취소 버튼 눌렀을 때*/ 
$('#cnlth3').on('click',function(){
    $('#first_3').attr('class', 'first_3 _kkkkkkk');
    $('#susu3').attr('class', 'susu3');
    $("#wjwkd3").attr("disabled", true)
})
/*숙소설명 텍스트 작성 시 저장 활성 */ 
$('#dlsvnt33').on("change",function(){
    $("#wjwkd3").attr("disabled", false)
})

/*-------------------------------------------------- */
/*언어 수정하기 버튼 눌렀을 때*/ 
$('#su4').on('click',function(){
    $('#first_4').attr('class', 'first_4');
    $('#susu4').attr('class', 'susu4 _kkkkkkk');
})
/*언어 닫기 버튼 눌렀을 때*/ 
$('#ekerl4').on('click',function(){
    $('#first_4').attr('class', 'first_4 _kkkkkkk');
    $('#susu4').attr('class', 'susu4');
    $("#wjwkd4").attr("disabled", true)
})
/*언어 취소 버튼 눌렀을 때*/ 
$('#cnlth4').on('click',function(){
    $('#first_4').attr('class', 'first_4 _kkkkkkk');
    $('#susu4').attr('class', 'susu4');
    $("#wjwkd4").attr("disabled", true)
})
/*언어 셀렉트 시 저장 활성 */ 
$('._1iwku6d').on("change",function(){
    $("#wjwkd4").attr("disabled", false)
})

/*-------------------------------------------------- */
/*숙소상태 수정하기 버튼 눌렀을 때*/ 
$('#su5').on('click',function(){
    $('#first_5').attr('class', 'first_5');
    $('#susu5').attr('class', 'susu5 _kkkkkkk');
})
/*숙소상태 닫기 버튼 눌렀을 때*/ 
$('#ekerl5').on('click',function(){
    $('#first_5').attr('class', 'first_5 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd5").attr("disabled", true)
})
/*숙소상태 취소 버튼 눌렀을 때*/ 
$('#cnlth5').on('click',function(){
    $('#first_5').attr('class', 'first_5 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd5").attr("disabled", true)
})
/*숙소상태 셀렉트 시 저장 활성 */ 
$('._83s1a2').on("change",function(){
    $("#wjwkd5").attr("disabled", false)
})
/*숙소상태 셀렉트 시 저장 활성 */ 
$('._g4rlqtx').on("change",function(){
    $("#wjwkd5").attr("disabled", false)
})

/*-------------------------------------------------- */
/*비활성 수정하기 버튼 눌렀을 때*/ 
$('#qlghkftjd').on('click',function(){
    $('#first_6').attr('class', 'first_6');
    $('#susu5').attr('class', 'susu5 _kkkkkkk');
})
/*비활성 닫기 버튼 눌렀을 때*/ 
$('#ekerl6').on('click',function(){
    $('#first_6').attr('class', 'first_6 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd6").attr("disabled", true)
})
/*비활성 취소 버튼 눌렀을 때*/ 
$('#cnlth6').on('click',function(){
    $('#first_6').attr('class', 'first_6 _kkkkkkk');
    $('#susu5').attr('class', 'susu5');
    $("#wjwkd6").attr("disabled", true)
})
/*비활성 셀렉트 시 저장 활성 */ 
$('._83s1a2').on("change",function(){
    $("#wjwkd6").attr("disabled", false)
})




/*-------------------------------------------------- */
/*위치 수정하기 버튼 눌렀을 때*/ 
$('#su7').on('click',function(){
    $('#first_7').attr('class', 'first_7');
    $('#susu7').attr('class', 'susu7 _kkkkkkk');
})
/*위치 닫기 버튼 눌렀을 때*/ 
$('#ekerl7').on('click',function(){
    $('#first_7').attr('class', 'first_7 _kkkkkkk');
    $('#susu7').attr('class', 'susu7');
    $("#wjwkd7").attr("disabled", true)
})
/*위치 취소 버튼 눌렀을 때*/ 
$('#cnlth7').on('click',function(){
    $('#first_7').attr('class', 'first_7 _kkkkkkk');
    $('#susu7').attr('class', 'susu7');
    $("#wjwkd7").attr("disabled", true)
})
/*위치 셀렉트 시 저장 활성 */ 
$('._zknsx2n').on("change",function(){
    $("#wjwkd7").attr("disabled", false)
})

/*-------------------------------------------------- */
/*지역설명 수정하기 버튼 눌렀을 때*/ 
$('#su8').on('click',function(){
    $('#first_8').attr('class', 'first_8');
    $('#susu8').attr('class', 'susu8 _kkkkkkk');
})
/*지역설명 닫기 버튼 눌렀을 때*/ 
$('#ekerl8').on('click',function(){
    $('#first_8').attr('class', 'first_8 _kkkkkkk');
    $('#susu8').attr('class', 'susu8');
    $("#wjwkd8").attr("disabled", true)
})
/*지역설명 취소 버튼 눌렀을 때*/ 
$('#cnlth8').on('click',function(){
    $('#first_8').attr('class', 'first_8 _kkkkkkk');
    $('#susu8').attr('class', 'susu8');
    $("#wjwkd8").attr("disabled", true)
})
/*지역설명 셀렉트 시 저장 활성 */ 
$('#wldurtjfaud').on("change",function(){
    $("#wjwkd8").attr("disabled", false)
})
/*-------------------------------------------------- */
/*교통편 수정하기 버튼 눌렀을 때*/ 
$('#su9').on('click',function(){
    $('#first_9').attr('class', 'first_9');
    $('#susu9').attr('class', 'susu9 _kkkkkkk');
})
/*교통편 닫기 버튼 눌렀을 때*/ 
$('#ekerl9').on('click',function(){
    $('#first_9').attr('class', 'first_9 _kkkkkkk');
    $('#susu9').attr('class', 'susu9');
    $("#wjwkd9").attr("disabled", true)
})
/*교통편 취소 버튼 눌렀을 때*/ 
$('#cnlth9').on('click',function(){
    $('#first_9').attr('class', 'first_9 _kkkkkkk');
    $('#susu9').attr('class', 'susu9');
    $("#wjwkd9").attr("disabled", true)
})
/*교통편 셀렉트 시 저장 활성 */ 
$('#ryxhdvus').on("change",function(){
    $("#wjwkd9").attr("disabled", false)
})


/*-------------------------------------------------- */
/*아름다운전망 수정하기 버튼 눌렀을 때*/ 
$('#su10').on('click',function(){
    $('#first_10').attr('class', 'first_10');
})
/*아름다운전망 닫기 버튼 눌렀을 때*/ 
$('#ekerl10').on('click',function(){
    $('#first_10').attr('class', 'first_10 _kkkkkkk');
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


/**/

