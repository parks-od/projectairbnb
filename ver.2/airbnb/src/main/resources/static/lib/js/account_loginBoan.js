/*실명 수정 버튼 눌렀을 때*/ 
$('#button1').on('click',function(){    
    $('#button1').attr('class', '_b0ybw8s _kkkkkkk'); 
    $('#button2').attr('class', '_b0ybw8s');
    $('#day1').attr('class', '_czm8crp _kkkkkkk');
    $('#form1').attr('class', 'form1');
})         

/*실명 취소 버튼 눌렀을 때*/ 
$('#button2').on('click',function(){    
    $('#button2').attr('class', '_b0ybw8s _kkkkkkk');
    $('#button1').attr('class', '_b0ybw8s');
    $('#form1').attr('class', 'form1 _kkkkkkk');
    $('#day1').attr('class', '_czm8crp');
})