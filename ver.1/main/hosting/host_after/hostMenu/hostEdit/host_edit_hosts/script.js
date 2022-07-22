/* 공동 호스트 팝업 on*/
$('#rhdehdghtmxm').on('click',function(){
    $('#popup1').show()
})
/* 공동 호스트 팝업 off*/
$('#button123').on('click',function(){
    $('#popup1').hide()
})

/* 피드백 팝업 on*/
$('#popup44').on('click',function(){
    $('#popupgg').show()
})
/* 피드백 팝업 off*/
$('#button4321').on('click',function(){
    $('#popupgg').hide()
    $('#button642').attr("disabled", true);
})

$('.pop0').on('click',function(){
    $('#button642').attr("disabled", false);
})

