let content;
$('#undefined-input').keyup(function (e){
    content = $(this).val();
});

$("._1ku51f04").on('click', function(){
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: 1,
            priceNormal: content
        }
    }

    $.post({
        url: '/api/room/hostoption13',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            alert('등록성공!');
            location.href='/pages/hostoption15';
        },
        error: function(){
            alert('등록실패!');
            location.reload();
        }
    });
});