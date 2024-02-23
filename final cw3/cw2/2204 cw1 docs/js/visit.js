var date = document.querySelector("#date");
var time = document.querySelector("#time");
var visitor = document.querySelector("#visitor");
var submit = document.querySelector(".submit");
var errorMsg = document.querySelector(".error");
var form = document.querySelector("form");
function check(event){
    errorMsg.innerHTML = ""
    if (date.value === "" || time.value === "" || visitor.value === ""){
        event.preventDefault();
        errorMsg.setAttribute("style", "color: red");
        errorMsg.innerHTML = "<h4>Data not completed; please re-enter</h4>";
    }
    else if (!Number.isInteger(parseInt(visitor.value)) || parseInt(visitor.value) < 1){
        event.preventDefault();
        errorMsg.setAttribute("style", "color: red");
        errorMsg.innerHTML = "<h4>Please enter a valid number of people!</h4>";
    }
    else{
        var pass = reserve(date.value, time.value, parseInt(visitor.value));
        if (pass){
            alert("Your reservation is successful!");
            event.preventDefault();
            submit.disabled = true;
        }else{
            event.preventDefault();
            alert("Sorry, the reservation is full!");
        }
    }
}

addEventListener("submit", check)


