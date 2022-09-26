
$('._1nmot8t').on('click', function(){
    $(this).toggleClass('_1nmot8t _19lvxaoa')
});

let lodging_covi;
let array = [];
$("._1ku51f04").on('click', function(){
    array.push($('._19lvxaoa').find('._129jysg').append(",").text())
    lodging_covi = array.toString()
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: parseInt($('#iddiv').text()),
            lodgingCovi: lodging_covi
        }
    }

    $.post({
        url: '/api/room/hostoption8',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            let lodging_id = parseInt($('#iddiv').text())
            console.log(lodging_id)
            location.href='/pages/hostoption9/' + lodging_id;
        },
        error: function(){
            location.reload();
        }
    });
});





