let bday = document.querySelector("#bday");
let luckyNum = document.querySelector("#luckynum");
let submitBtn = document.querySelector("#submit-btn");
let output = document.querySelector(".output");


let checkBday = (sum,luckyNum) => 
{
    if(sum%luckyNum === 0)
    {
        DisplayMSG("Congrats ! Your BirthDay is Super Lucky")
    }
    else
    {
        DisplayMSG("OH NO ! Your BirthDay is not Lucky")
    }
}



function checkValue () {
    output.style.display = "none";
    let dob = bday.value;
    let sum = calculateDOBsum(dob);
    if(sum && luckyNum.value > 0){
        checkBday(sum,luckyNum.value);
    }
    else{
        DisplayMSG("Please enter both Date of birth and Lucky number as positive");
    }

    console.log("aishwary");

}



let DisplayMSG = (text) => {
    output.style.display = "block";
    output.innerText = text;
}



let calculateDOBsum = (dob) =>
{
    dob = dob.replaceAll("-","");
    let sum = 0;

    for(let i=0;i<dob.length;i++)
    {
        sum = sum+ Number(dob.charAt(i));
    }
    return sum;
}


submitBtn.addEventListener('click',checkValue );