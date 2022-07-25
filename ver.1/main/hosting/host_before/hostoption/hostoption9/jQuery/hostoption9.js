$(function () {
    $('._15rpys7s').click(function (e) {
        e.preventDefault();
        $('#file').click();
    });
});

// var sel_files = [];

// $(document).ready(function(){
//     $('#file').on("change", handleImgsFilesSelect);
// })

// function handleImgsFilesSelect(e) {
//     var files = e.target.files;
//     var filesArr = Array.prototype.slice.call(files);

//     filesArr.forEach(function(f){
//         if(!f.type.match("image.*")){
//             alert('확장자는 이미지 확장자만 가능합니다');
//             return;
//         }
//         sel_files.push(f);

//         var reader = new FileReader();
//         reader.onload = function(e) {
//             var img_html = "<img src=\"" + e.target.result + "\" />";
//             $("이미지랩").append(img_html);
//         }
//         reader.readAsDataURL(f);
//     })
// }