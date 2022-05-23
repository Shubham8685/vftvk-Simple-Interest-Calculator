function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // formula for calculating simple interest
    var interest = (principal * years * rate)/100;
    // calculating final amount after
    var amount = parseInt(interest)+ parseInt(principal);
    var year = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// validation fo principal amount
        function validation(){

        if (principal.value <= 0 ) {
            alert("Enter a positive number");
            principal.focus();
            return false;
        }
    }