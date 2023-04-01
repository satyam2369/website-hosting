console.log('satyam mishra');

function reset() {
    window.location.reload();

    
}

    function myfunction() {
        document.getElementById("table").style.visibility="visible";
        var x = document.getElementById('input').value;
        document.getElementById("td_1").innerHTML = x;
    
    // if (x=="80c") {
        // document.getElementById("td_2").innerHTML = "For savings";
        // document.getElementById("td_3").innerHTML = "Individual and huf";
        // document.getElementById("td_4").innerHTML = "actual amount deposited in PPF or ₹150,000 whichever is less";


        
    // }
    // else if (x=="80ccc") {
        // document.getElementById("td_2").innerHTML = "Pension Fund of LIC or other Insurer";
        // document.getElementById("td_3").innerHTML = "Individual";
        // document.getElementById("td_4").innerHTML = "actual amount paid or ₹150,000 p.a. whichever is less";
        
    // }
    // else if (x=="80ccd") {
        // document.getElementById("td_2").innerHTML = "employees of Central/State govt. other employees or self employed individual";
        // document.getElementById("td_3").innerHTML = "Individual";
        // document.getElementById("td_4").innerHTML = "Amount contributed by employee or employer (each) or 12% of salary whichever is less";
        // document.getElementById('table').style.marginLeft = "2rem";
    // } 
        
    
    // else{
        // document.getElementById("table").innerHTML = "invalid input";
        // document.getElementById('table').style.marginLeft = "40rem";
        // document.getElementById('table').style.width = "15rem";
        // document.getElementById('table').style.paddingLeft = "4.8rem";
        // document.getElementById('table').style.paddingTop = "0.5rem";
        // document.getElementById('table').style.height = "3rem";
        // document.getElementById('table').style.borderRadius = "7px";
        // document.getElementById('table').style.backgroundImage =" radial-gradient(red,red)"
        // document.getElementById('table').style.borderColor = "red";
    // }
    switch (x) {
        case "80c":
            document.getElementById("td_2").innerHTML = "For savings";
            document.getElementById("td_3").innerHTML = "Individual and huf";
            document.getElementById("td_4").innerHTML = "actual amount deposited in PPF or ₹150,000 whichever is less";

            break;
        case "80ccc" :
            document.getElementById("td_2").innerHTML = "Pension Fund of LIC or other Insurer";
            document.getElementById("td_3").innerHTML = "Individual";
            document.getElementById("td_4").innerHTML = "actual amount paid or ₹150,000 p.a. whichever is less";
            break;
        case "80ccd":
            document.getElementById("td_2").innerHTML = "employees of Central/State govt. other employees or self employed individual";
            document.getElementById("td_3").innerHTML = "Individual";
            document.getElementById("td_4").innerHTML = "Amount contributed by employee or employer (each) or 12% of salary whichever is less";
            document.getElementById('table').style.marginLeft = "2rem";
            break;
        case "80cce":
            document.getElementById("td_2").innerHTML = "Restriction";
            document.getElementById("td_3").innerHTML = "Individual";
            document.getElementById("td_4").innerHTML = "not specified";

            break;
        case "80ccg":
            document.getElementById("td_2").innerHTML = "Investment made in equity saving scheme";
            document.getElementById("td_3").innerHTML = "Individual";
            document.getElementById("td_4").innerHTML = "50% of investment made or 25,000 whichever is less";
            break;
        case "80d":
            document.getElementById("td_2").innerHTML = "Health Insurance, pre ventive health check-up and contribution made to the Central Govt. Health Scheme and such other notified schemes (CGHS)";
            document.getElementById("td_3").innerHTML = "Individual & HUF";
            document.getElementById("td_4").innerHTML = "Actual Amount paid or 25,000 (Senior Citizen 50,000) whichever is less Additional 25,000 (for senior citizen 50,000) for parent/ parents. In case of health check-up, upto 5,000 shall be allowed within above limits. Medical expenditure upto 50,000 for treatment of 'a very senior citizen'.";
            break;
        case "80dd":
            document.getElementById("td_2").innerHTML = "Medically Handi capped dependent and deposit with LIC or UTI";
            document.getElementById("td_3").innerHTML = "Resident";
            document.getElementById("td_4").innerHTML = "75,000 p.a. but for severe disability 1,25,000 p.a.";
            break;
        case "80ddb":
            document.getElementById("td_2").innerHTML = "Expenses on treatment";
            document.getElementById("td_3").innerHTML = "Individual & HUF";
            document.getElementById("td_4").innerHTML = "(a) For non-senior citizen.40,000 or Actual w.e. is less. <br> (b) For senior citizen 1,00,000, or actual expenditure w.e. is less.";
            break;
        case "80e":
            document.getElementById("td_2").innerHTML = "interest and on taken for studies";
            document.getElementById("td_3").innerHTML = "Individual only ";
            document.getElementById("td_4").innerHTML = "actual amount of interest paid.";
            break;
        case "":
            break;
        default:
            document.getElementById("table").innerHTML = "invalid input";
            document.getElementById('table').style.marginLeft = "40rem";
            document.getElementById('table').style.width = "15rem";
            document.getElementById('table').style.paddingLeft = "4.8rem";
            document.getElementById('table').style.paddingTop = "0.5rem";
            document.getElementById('table').style.height = "3rem";
            document.getElementById('table').style.borderRadius = "7px";
            document.getElementById('table').style.backgroundImage =" radial-gradient(red,red)"
            document.getElementById('table').style.borderColor = "red";
            break;
    }
}
// }




