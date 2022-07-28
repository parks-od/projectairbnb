// $('button').on('click',function(){
//     if($(this).attr('class') == '_1nmot8t'){
//         $(this).attr("class","_19lvxaoa")
//     }
//     if($(this).attr('class') == '_19lvxaoa'){
//         $(this).attr("class","_1nmot8t")
//     }
// });

        // $('._1nmot8t').on('click',function(){
        //     $(this).attr("class","_19lvxaoa");
        //     $('._19lvxaoa').on('click',function(){
        //         $(this).attr("class","_1nmot8t");
        //     }); 
        // });
        let array;
        $('._1nmot8t').on('click', function(){
            $(this).toggleClass('_1nmot8t _19lvxaoa')
        });

$("._1ku51f04").on('click', function(){
    let count = $('._19lvxaoa');
    for(let content in count ){
        array = $('._19lvxaoa').find('._129jysg').text();
    }
    alert(array)
    let jsonData = {
        transaction_time: new Date(),
        resultCode:"ok",
        description:"ok",
        data:{
            lodgingId: 1,
            lodgingCovi: array
        }
    }

    $.post({
        url: '/api/room/hostoption8',
        data: JSON.stringify(jsonData),
        dataType: 'json',
        contentType: 'application/json',
        success: function(){
            alert('등록성공!');
            location.href='/pages/hostoption9';
        },
        error: function(){
            alert('등록실패!');
            location.reload();
        }
    });
});





