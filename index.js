const billAmount = document.querySelector("#bill-amt");
const amountPaid = document.querySelector('#amountPaid');
var btnClick = document.querySelector("#btn");
var tableChange = document.querySelectorAll(".change-table");
var numberOfNotes = document.querySelectorAll("#no-of-notes");
const errMsg = document.querySelector("#error-msg");
const denominationList = [2000,500,100,20,5,1];
btnClick.addEventListener("click",()=>onClickValidator());


function onClickValidator(){
    //console.log("clicked!!");
    //errMsg.style.display = "none";
   hideMessage();
   if(billAmount.value >0){
       //console.log("ba",billAmount.value);
       if(amountPaid.value >= billAmount.value){
           
          // console.log(amountPaid.value);
          // console.log(billAmount.value);
           const returnAmount = amountPaid.value-billAmount.value;
           computeValue(returnAmount);
       }
       else{
            showMessage("wanna wash utensils??");
       }
   }
   else{
      showMessage("invalid input");
    }
}
function computeValue(retVal){
    for(let i=0;i<denominationList.length;i++){
        var count=Math.trunc(retVal/denominationList[i]);
        retVal%=denominationList[i];
        numberOfNotes[i].innerText = count;
    }
}

function hideMessage(){
    errMsg.style.display = "none";
}

function showMessage(msg){
    errMsg.style.display ="block";
    errMsg.innerText = msg;
}






