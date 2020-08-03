var confirmationPinCheck = document.getElementById("confirmationPinCheck");
var confirmationPinSubmit = document.getElementById("confirmationPinSubmit");
var missMatchPin = document.getElementById("missMatchPin");
var matchPin = document.getElementById("matchPin");
var actionLeft = document.getElementById("actionLeft");

function alertRemove(){
    missMatchPin.style.display = "none";
    matchPin.style.display = "none";
}

function fontAndColorFix(){
    confirmationPinCheck.style.color = "white";
    confirmationPinCheck.style.fontSize="24px"
}

document.getElementById("pinGenerateBtn").addEventListener("click",function(pGF){
    var randomNumber = Math.ceil(Math.random()*8999+1000);
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
confirmationPinSubmit.addEventListener("click",function(){
if(confirmationPinCheck.value.length == 4){
    if(confirmationPinCheck.value == generatePinShow.value){
        matchPin.style.display = "block";
        confirmationPinSubmit.disabled = true;
        confirmationPinSubmit.style.backgroundColor="green";
        confirmationPinSubmit.style.color="white";
    }
    else{
        missMatchPin.style.display = "block";
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
    }else{
        confirmationPinSubmit.disabled=true;
        confirmationPinSubmit.style.backgroundColor="grey";
        confirmationPinSubmit.style.color="white";
    }
}
})
var omitBtn = document.getElementById("omitBtn");
omitBtn.addEventListener("click", function(){
    confirmationPinCheck.value = confirmationPinCheck.value.slice(0,-1);
    alertRemover();
    fontAndColorFixer();
});

var clearBtn =document.getElementById("clearBtn");
clearBtn.addEventListener("click",function(){
    confirmationPinCheck.value="";
    alertRemove();
    fontAndColorFix();
})