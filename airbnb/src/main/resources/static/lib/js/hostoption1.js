$('._cd8zo4d').on('click', function(){

        let jsonData = {
            transaction_time: new Date(),
            resultCode:"ok",
            description:"ok",
            data:{
                lodgingTitle: "ㅋㅋ"
            }
        }

        $.post({
            url: '/api/room',
            dataType: 'json',
            data: JSON.stringify(jsonData),
            contentType: 'application/json',
            success: function () {
                alert('등록성공!');
                location.href = '/pages/hostoption2';
            },
            error: function () {
                alert('등록실패!');
                location.reload();
            }
        });
})