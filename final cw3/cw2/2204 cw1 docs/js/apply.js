var engine = document.querySelector(".engine")
var science = document.querySelector(".science")
var intstu = document.querySelector(".intstu")
var engsub = document.querySelector(".engsub")
var scisub = document.querySelector(".scisub")
var intsub = document.querySelector(".intsub")
var collegeData = document.querySelectorAll("tbody>tr>td:nth-child(1)")
var majorData = document.querySelectorAll("tbody>tr>td:nth-child(2)")
var majorNum = document.querySelector(".majorNum")
var num = 0;
var time = document.querySelector(".time")
var submitTime = new Date()
var order 
var error = document.querySelector(".errorMsg")
var submit = document.querySelector("#submit")
var clear = document.querySelector("#clear")
var gapNum = []


window.onload = function(){
    engine.setAttribute("style", "background-color: white");
    science.setAttribute("style", "background-color: lightgray");
    intstu.setAttribute("style", "background-color: lightgray");
    scisub.classList.add("hidden");
    intsub.classList.add("hidden");
}

engine.onclick = function(){
    engine.setAttribute("style", "background-color: white");
    science.setAttribute("style", "background-color: lightgray");
    intstu.setAttribute("style", "background-color: lightgray");
    engsub.classList.remove("hidden");
    scisub.classList.add("hidden");
    intsub.classList.add("hidden");
}
science.onclick = function(){
    science.setAttribute("style", "background-color: white");
    engine.setAttribute("style", "background-color: lightgray");
    intstu.setAttribute("style", "background-color: lightgray");
    scisub.classList.remove("hidden");
    engsub.classList.add("hidden");
    intsub.classList.add("hidden");
}
intstu.onclick = function(){
    intstu.setAttribute("style", "background-color: white");
    engine.setAttribute("style", "background-color: lightgray");
    science.setAttribute("style", "background-color: lightgray");
    intsub.classList.remove("hidden");
    scisub.classList.add("hidden");
    engsub.classList.add("hidden");
}

function check(major,rank){
    var rankInt = parseInt(rank);
    if (!Number.isInteger(rankInt)) {
        alert("Please enter the rank of chosen major");
        return 0;
    }
    if (rankInt < 1 || rankInt > 10) {
        alert("Please enter the rank of chosen major between 1 and 10");
        return 0;
    }
    for (let i= 0; i < 10; i++) {
        if (majorData[i].innerHTML == major) { 
            alert("You have already chosen this major");
            return 0;
        }  
        else if (majorData[rankInt-1].innerHTML != "") {
            alert("You have already chosen this rank");
            return 0;
        }
    }
    return 1;
}
    
function updateTable(major, college, rank, event){
    event.preventDefault();
    switch(rank){
        case"1":
            order = "st";
            break;
        case"2":
            order = "nd";
            break;
        case"3":
            order = "rd";
            break;
        default:
            order = "th";
    }
    var rankInt = parseInt(rank);
    if(check(major,rank)){
        alert("You have chosen " + major + " as your " + rank + order + " chosen major in " + college + " successfully");
        majorData[rankInt-1].innerHTML = major;
        collegeData[rankInt-1].innerHTML = college;
        var list = []
        for(var i=0; i<10; i++){
            if(majorData[i].innerHTML != ""){
                list.push(i);
                num = list.length;
            }
        }

        majorNum.innerHTML = "Total number of completed choices:" + num;
        time.innerHTML = submitTime.getFullYear() + "/" + (submitTime.getMonth() + 1) + "/" + submitTime.getDate() + " "+ submitTime.getHours() + ":" + submitTime.getMinutes()
        + ":" + submitTime.getSeconds();
        return num;
    }
}

document.querySelector("#cs_b").onclick = function(event){
    updateTable("BEng in Computer Science and Technology", "College of Engineering", document.querySelector("#cs").value, event);
}
document.querySelector("#ei_b").onclick = function(event){
    updateTable("BEng in Electronic Information", "College of Engineering",document.querySelector("#ei").value, event);
}
document.querySelector("#mse_b").onclick = function(event){
    updateTable("BEng in Materials Science and Engineering", "College of Engineering", document.querySelector("#mse").value,event);
}
document.querySelector("#mc_b").onclick = function(event){
    updateTable("BEng in Materials and Chemicals", "College of Engineering", document.querySelector("#mc").value,event);
}
document.querySelector("#est_b").onclick = function(event){
    updateTable("BEng in Electronic Science and Technology", "College of Engineering",document.querySelector("#est").value,event);
}
document.querySelector("#phy_b").onclick = function(event){
    updateTable("BSc in Physics", "College of Science",document.querySelector("#phy").value,event);
}
document.querySelector("#chem_b").onclick = function(event){
    updateTable("BSc in Chemistry",  "College of Science",document.querySelector("#chem").value,event);
}
document.querySelector("#bio_b").onclick = function(event){
    updateTable("BSc in Biology", "College of Science",document.querySelector("#bio").value,event);
}
document.querySelector("#cogs_b").onclick = function(event){
    updateTable("BSc in Cognitive Science", "College of Interdisciplinary Studies",document.querySelector("#cogs").value,event);
}
document.querySelector("#be_b").onclick = function(event){
    updateTable("BEng in Biomedical Engineering", "College of Interdisciplinary Studies",document.querySelector("#be").value,event);
}
document.querySelector("#bm_b").onclick = function(event){
    updateTable("BEng in Biology and Medicine", "College of Interdisciplinary Studies",document.querySelector("#bm").value,event);
}

function gap() {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9 - i; j++) {
        if (majorData[i].innerHTML == "" && majorData[i + j].innerHTML != "") {
          gapNum.push(i + 1);
          j = 8;
        }
      }
    }
    return gapNum;
}

submit.onclick = function(event){
    event.preventDefault();
    var gapIndex = gap();
    if(num === 0){
        error.setAttribute("style", "color:red; text-align: center;");
        error.innerHTML = "<h4>You have not chosen any major<h4>";
    }
    else if(gapIndex.length > 0){
        for(var i=0;i<gapIndex.length;i++){
            if (gapIndex[i] == 1){
                gapIndex[i] = "1st";
            }
            else if(gapIndex[i] == 2){
                gapIndex[i] = "2nd"
            }
            else if(gapIndex[i] == 3){
                gapIndex[i] = "3rd"
            }
            else if(gapIndex[i]>3){
                gapIndex[i] += "th"
            }
        }
        if(gapIndex.length>1){
            gapIndex[gapIndex.length-1] = "and " + gapIndex[gapIndex.length-1]
        }
        var gapMsg = gapIndex.join(", ");
        error.setAttribute("style", "color:red; text-align: center;");
        error.innerHTML = "<h4>You have not chosen your " + gapMsg + " major, you can not leave any gap between your chosen majors<h4>";
        gapNum = [];
    }
    else{
        error.setAttribute("style", "color:red; text-align: center;");
        error.innerHTML = "<h4>You have successfully submitted your application at " + submitTime.getFullYear() + "/" + (submitTime.getMonth() + 1) + "/" + submitTime.getDate() + " "+ submitTime.getHours() + ":" + submitTime.getMinutes()
        + ":" + submitTime.getSeconds() + "<h4>";
        
    }
}

