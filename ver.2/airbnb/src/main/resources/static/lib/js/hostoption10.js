$('._1l56up5').on('click',function(){
    $(this).attr("class","_14osaqey");
});



$('._yv33y4').keyup(function (e) {
	let content = $(this).val();
    
    // 글자수 세기
    if (content.length == 0 || content == '') {
        $('#textspan').text('0/50');
    } else {
        $('#textspan').text(content.length + '/50');
    }
    
    // 글자수 제한
    if (content.length > 50) {
    	// 200자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0,50));

    };

    if (content.length != 0 || content != ''){
        $("._1ku51f04").removeAttr("disabled");
    }else if(content.length == 0 || content == ''){
        $("._1ku51f04").attr("disabled", "");}
});
