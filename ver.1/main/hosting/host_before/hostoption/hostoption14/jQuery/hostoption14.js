// $('html').click(function(e){
//     console.log('')
//         if((e.target.id === 'SURVEILLANCE-row-checkbox') || (e.target.id === 'toggle1') || (e.target.class === 'toggle2')){
//             $('#SURVEILLANCE-row-checkbox').toggleClass('_1v5cvwv4 _41yoza');
//             $('#toggle1').toggleClass('_smt4n2a _1yf4i4f');
//             $('#toggle2').toggleClass('_1oj8hra _1oj8hra1');
//         }
// });

$("input[type=checkbox]").click(function(e){
    if(e.target.id === 'SURVEILLANCE-row-checkbox'){
        $(this).toggleClass('_1yf4i4f _smt4n2a');
        $('#toggle1').toggleClass('_41yoza _1v5cvwv4');
        $('#toggle2').toggleClass('_1oj8hra1 _1oj8hra');
    }
    if(e.target.id === 'WEAPONS-row-checkbox'){
        $(this).toggleClass('_1yf4i4f _smt4n2a');
        $('#toggle3').toggleClass('_41yoza _1v5cvwv4');
        $('#toggle4').toggleClass('_1oj8hra1 _1oj8hra');
    }
    if(e.target.id === 'ANIMALS-row-checkbox'){
        $(this).toggleClass('_1yf4i4f _smt4n2a');
        $('#toggle5').toggleClass('_41yoza _1v5cvwv4');
        $('#toggle6').toggleClass('_1oj8hra1 _1oj8hra');
    }
});