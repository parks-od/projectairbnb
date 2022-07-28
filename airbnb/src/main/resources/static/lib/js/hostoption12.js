$('._1l56up5').on('click',function(){
    $(this).attr("class","_14osaqey");
});

$('._1c3ujs7').on('click',function(){
    $(this).attr("class","_1c3ujs7 focus-visible");
});

let content;
$('._1c3ujs7').keyup(function (e) {
    content = $(this).val();
    
    // 글자수 세기
    if (content.length == 0 || content == '') {
        $('#textspan').text('37/500');
    } else {
        $('#textspan').text(content.length + '/500');
    }
    
    // 글자수 제한
    if (content.length > 500) {
        // 200자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0,500));

    };

    if (content.length != 0 || content != ''){
        $("._1ku51f04").removeAttr("disabled");
    }else if(content.length == 0 || content == ''){
        $("._1ku51f04").attr("disabled", "");}
});

$("._1ku51f04").on('click', function(){
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: 1,
            lodgingExplain: content
        }
    }

    $.post({
        url: '/api/room/hostoption12',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            alert('등록성공!');
            location.href='/pages/hostoption13';
        },
        error: function(){
            alert('등록실패!');
            location.reload();
        }
    });
});
        