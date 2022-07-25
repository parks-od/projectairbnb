$('._1fnnpuw6').click(function (e) {
    if ($('._qgv474').find("._1p5zqcr")) {

        $('#searchbar1').addClass('_16kl056s').removeClass('_1pulvtcv');
        $('#searchbar2').addClass('_k568g25').removeClass('_1y61moct');
        $('#searchbar3').addClass('_xzfqmcp').removeClass('_1fnnpuw6');
        $('#searchbar4').addClass('_hjxf4mi').removeClass('_lbaapj');
        $('#searchbar5').addClass('_fad0ioi').removeClass('_1l0iogx');
        $('#searchbar6').addClass('_18c48cum').removeClass('_171jtg');
        $('#autocomplete-results').addClass('_1p5zqcr').removeClass('_1p5zqcr1');
    }
});
$(document).on("click", function (e) {
    if ($(e.target).closest("._xzfqmcp").length < 1 && !$(e.target).hasClass("_xzfqmcp")) {
        $('#searchbar1').removeClass('_16kl056s').addClass('_1pulvtcv');
        $('#searchbar2').removeClass('_k568g25').addClass('_1y61moct');
        $('#searchbar3').removeClass('_xzfqmcp').addClass('_1fnnpuw6');
        $('#searchbar4').removeClass('_hjxf4mi').addClass('_lbaapj');
        $('#searchbar5').removeClass('_fad0ioi').addClass('_1l0iogx');
        $('#searchbar6').removeClass('_18c48cum').addClass('_171jtg');
        $('#autocomplete-results').removeClass('_1p5zqcr').addClass('_1p5zqcr1');
    }
});


$('._12uiun8').on("click", function (e) {
    if ($('._12uiun8').closest('_cawx7l0')) {
        $('._xzfqmcp').hide()

        $('._cawx7l0').show()
    }
});

$(document).ready(function (){
    $('#submitbtn').click(function (){
        $('._cawx7l0').hide();
        $('._xzfqmcp').show()
    })
    $('._oda838').click(function (){
        $('._cawx7l0').hide();
        $('._xzfqmcp').show()
    })
})


// $('._xzfqmcp').addClass('_cawx7l0').removeClass('_xzfqmcp');
// $('#changebox').addClass('_1p19jml').removeClass('_qgv474');