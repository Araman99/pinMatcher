// declare all id  in variable
var confirmationPinCheck = document.getElementById("confirmationPinCheck");
var confirmationPinSubmit = document.getElementById("confirmationPinSubmit");
var mismatchPin = document.getElementById("mismatchPin");
var matchPin = document.getElementById("matchPin");
var actionLeft = document.getElementById("actionLeft");
var notify = document.getElementById("notify");

// alert remover function
function alertRemove(){
    mismatchPin.style.display = "none";
    matchPin.style.display = "none";
}

// font size and text color fixer function
function fontAndColorFix(){
    confirmationPinCheck.style.color = "white";
    confirmationPinCheck.style.fontSize="24px"
}

//scroll function
function pageScroll() {
    window.scrollBy(0,30);
    scrollDelay = setTimeout('pageScroll()',10);
}
//random pin generator
document.getElementById("pinGenerateBtn").addEventListener("click",function(pGF){
    var number = "0172469358";
    var randomNumber = "";
    for(var i=0; i<4; i++){
        randomNumber+=number[Math.floor(Math.random()*10)];
    }
    document.getElementById("generatePinShow").value = randomNumber;
    alertRemove();
    fontAndColorFix();
    actionLeft.innerText = 3;
    confirmationPinCheck.value = "";
    confirmationPinSubmit.disabled=false;
    confirmationPinSubmit.style.backgroundColor="#495BC3";
    confirmationPinSubmit.style.color="white";
}
)

//generate pin checker
confirmationPinSubmit.addEventListener("click",function(){
if(confirmationPinCheck.value.length == 4){
    if(confirmationPinCheck.value == generatePinShow.value){
        matchPin.style.display = "block";
        confirmationPinSubmit.disabled = true;
        confirmationPinSubmit.style.backgroundColor="green";
        confirmationPinSubmit.style.color="white";
        pageScroll();
    }
    else{
        mismatchPin.style.display = "block";
        pageScroll();
    } 
}
else{
    confirmationPinCheck.value = "Input 4 digit number";
    confirmationPinCheck.style.color = "Red";
    confirmationPinCheck.style.fontSize = "16px";
}
var tryLeft = parseInt(actionLeft.innerText)-1;
actionLeft.innerText = tryLeft;
if(tryLeft == 0){
    if(confirmationPinCheck.value == generatePinShow.value){
        confirmationPinSubmit.disabled=true;
        pageScroll();
    }
    else{
        confirmationPinSubmit.disabled=true;
        confirmationPinSubmit.style.backgroundColor="grey";
        confirmationPinSubmit.style.color="white";
    }
}
})
//omitButton function to delete number one by one 
var omitBtn = document.getElementById("omitBtn");
omitBtn.addEventListener("click", function(){
    confirmationPinCheck.value = confirmationPinCheck.value.slice(0,-1);
    alertRemove();
    fontAndColorFix();
});

//clearButton function to delete all the number at a time
var clearBtn =document.getElementById("clearBtn");
clearBtn.addEventListener("click",function(){
    confirmationPinCheck.value="";
    alertRemove();
    fontAndColorFix();
})
