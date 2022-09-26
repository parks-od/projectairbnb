let content;
$('#plus').click(function (){
    let sum = parseInt($('#undefined-input').val()) + 1000;
    $('#undefined-input').val(sum)
    if(parseInt($('#undefined-input').val()) >= 11000){
        $('#discount').attr('disabled', false);
    }
})

$('#discount').click(function (){
    let min = parseInt($('#undefined-input').val()) - 1000;
    $('#undefined-input').val(min)
    if(parseInt($('#undefined-input').val()) <= 10000){
        $('#discount').attr('disabled', true);
    }
})

$('#undefined-input').keyup(function (){
    content = $(this).val()
    console.log(content)
});

$("._1ku51f04").on('click', function(){
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: parseInt($('#iddiv').text()),
            priceNormal: $('#undefined-input').val()
        }
    }
    $.post({
        url: '/api/room/hostoption13',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            location.href='/pages/hostoption15';
        },
        error: function(){
            location.reload();
        }
    });
});