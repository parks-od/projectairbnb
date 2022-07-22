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
        $('._1nmot8t').on('click', function(){
            $(this).toggleClass('_1nmot8t _19lvxaoa')
        });

