//여행자 게스트 숫자
function pCount1(){    
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val+1;
    if(val+1 > 0){
        $('#discount1').removeAttr("disabled")
    }  
}
function mCount1(){
    const val = Number(document.querySelector("#c1").innerText);
    document.querySelector("#c1").innerText=val-1;
    if((document.querySelector("#c1").innerText)==1){
        $('#discount1').attr("disabled","")
    }
}

function pCount2(){    
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText=val+1;
    if(val+1 > 0){
        $('#discount2').removeAttr("disabled")
    }  
}
function mCount2(){
    const val = Number(document.querySelector("#c2").innerText);
    document.querySelector("#c2").innerText=val-1;
    if((document.querySelector("#c2").innerText)==1){
        $('#discount2').attr("disabled","")
    }
}


function pCount3(){    
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText=val+1;
    if(val+1 > 0){
        $('#discount3').removeAttr("disabled")
    }  
}
function mCount3(){
    const val = Number(document.querySelector("#c3").innerText);
    document.querySelector("#c3").innerText=val-1;
    if((document.querySelector("#c3").innerText)==1){
        $('#discount3').attr("disabled","")
    }
}


function pCount4(){    
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText=val+1;
    if(val+1 > 0){
        $('#discount4').removeAttr("disabled")
    }  
}
function mCount4(){
    const val = Number(document.querySelector("#c4").innerText);
    document.querySelector("#c4").innerText=val-1;
    if((document.querySelector("#c4").innerText)==1){
        $('#discount4').attr("disabled","")
    }
}