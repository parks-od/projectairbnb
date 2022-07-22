// $('._hgs47m').on("click", function(e){
//     if(!$(e.target).find('._165vphy')){
//         $(this).append('<div class="_165vphy"><svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;"><ellipse cx="8" cy="8" fill-rule="evenodd" rx="8" ry="8"></ellipse></svg></div>')
//     }
// })


// $('._1fnnolo').on("click", function(e){
//     console.log($(e.target))
//         $('svg').show()
// })

$(document).ready(function() {
    $('svg').hide();
    $('._ahrdgu1').hide()
    $('._1sk1regd').hide()

    $('#cancel_reason_radio_group_0').click(function() {
        $('svg').hide();
        $('#svg1').show();
        $('._1sk1regd').hide();
        $('._ahrdgu1').hide();
        $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
    });
    $('#cancel_reason_radio_group_1').click(function() {
        $('svg').hide();        
        $('#svg2').show();
        $('._1sk1regd').show();
        $('._ahrdgu1').hide();
        $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
    });
    $('#cancel_reason_radio_group_2').click(function() {
        $('svg').hide();
        $('#svg3').show();
        $('._1sk1regd').hide();
        $('._ahrdgu1').hide();
        $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
    });
    $('#cancel_reason_radio_group_3').click(function() {
        $('svg').hide();
        $('#svg4').show();
        $('._1sk1regd').hide();
        $('._ahrdgu1').show();
        $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
    }); 
});
// function check() {
//     $('input:radio[name="radio"]').change(function(){
//         if($('input:radio[name="cancel_reason_radio_group"]').is(':checked')){
//             $('button[type=button]').toggleClass('_72kmbi0 _p1854ce').removeAttr('disabled', '');
//         }
//     });
// }
