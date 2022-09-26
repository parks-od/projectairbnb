let count = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

// 메인 사진
function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('lodging_pic_image').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('lodging_pic_image').src = "";
    }
}


// 서브 사진 1
function readURL1(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('lodging_pic_sub_image1').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('lodging_pic_sub_image1').src = "";
    }
}

// 서브 사진 2
function readURL2(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('lodging_pic_sub_image2').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('lodging_pic_sub_image2').src = "";
    }
}

// 서브 사진 3
function readURL3(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('lodging_pic_sub_image3').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('lodging_pic_sub_image3').src = "";
    }
}

// 서브 사진 4
function readURL4(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('lodging_pic_sub_image4').src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        document.getElementById('lodging_pic_sub_image4').src = "";
    }
}

$('#lodging_pic').on('change', function(){
    count = 1
    if(count+count1+count2+count3+count4 == 5){
        $('._1ku51f04').attr("disabled", false);
    }else{
        $('._1ku51f04').attr("disabled", true);
    }
})

$('#lodging_pic_sub1').on('change', function(){
    count1 = 1
    if(count+count1+count2+count3+count4 == 5){
        $('._1ku51f04').attr("disabled", false);
    }else{
        $('._1ku51f04').attr("disabled", true);
    }
})

$('#lodging_pic_sub2').on('change', function(){
    count2 = 1
    if(count+count1+count2+count3+count4 == 5){
        $('._1ku51f04').attr("disabled", false);
    }else{
        $('._1ku51f04').attr("disabled", true);
    }
})

$('#lodging_pic_sub3').on('change', function(){
    count3 = 1
    if(count+count1+count2+count3+count4 == 5){
        $('._1ku51f04').attr("disabled", false);
    }else{
        $('._1ku51f04').attr("disabled", true);
    }
})

$('#lodging_pic_sub4').on('change', function(){
    count4 = 1
    if(count+count1+count2+count3+count4 == 5){
        $('._1ku51f04').attr("disabled", false);
    }else{
        $('._1ku51f04').attr("disabled", true);
    }
})


