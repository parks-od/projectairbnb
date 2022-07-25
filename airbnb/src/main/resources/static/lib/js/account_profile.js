/*프로필 수정하기 버튼 눌렀을 때*/ 
$('#button1').on('click',function(){
    $('#form66').attr('class', 'form66');
    $("#button1").attr("disabled", true);
})

/*프로필 취소 버튼 눌렀을 때*/ 
$('#button2').on('click',function(){
    $('#form66').attr('class', 'form66 _kkkkkkk');
    $("#button1").attr("disabled", false);
    $("#button33").attr("disabled", true)
})


/*인풋 텍스트 작성시 버튼 비활성화 해제*/
$('#about12').on("change keydown paste textarea",function(){
    if($("#about12").val()=='')
        $("#button33").attr("disabled", false)
    
})

