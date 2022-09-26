$(function () {
    $('._cd8zo4d').on('click', function(){
        let jsonData = {
            transaction_time: new Date(),
            resultCode:"ok",
            description:"ok",
            data:{}
        }
        $.post({
            url: '/api/room/',
            dataType: 'json',
            data: JSON.stringify(jsonData),
            contentType: 'application/json',
            success: function (res) {
                location.href = '/pages/hostoption2/'+res.data.lodgingId;
            },
            error: function () {
                location.reload();
            }
        });
    })
});