




function activeOrange(){
activeLight('rød', 'grønn', 'orange', 'orange');

}

function lightTimer(){
    setTimeout(activeRed, 1000)
}

function activeGreen(){

activeLight('rød', 'orange', 'grønn', 'grønn');
setTimeout(activeOrange, 2000);

}

function activeLight(divId1, divId2, divId3, divId4){
document.getElementById(divId1).classList.remove("active");
document.getElementById(divId2).classList.remove("active");
document.getElementById(divId3).classList.add("active");
document.getElementById(divId4).classList.add("active");

}

function activeRed(){
activeLight('grønn', 'orange', 'rød', 'rød');
setTimeout(activeRedAndOrange, 1000)

}

function activeRedAndOrange(){
activeLight('grønn', 'grønn', 'rød', 'orange')
setTimeout(activeRedAndOrange, 1000)


}







