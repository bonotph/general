var text = ["Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in scienceand technology! 20 QUOTAS LEFT!", 
"Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!", 
"Join the future of interdisciplinarystudies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"];
let num = Math.floor(Math.random()*text.length);
function loopMessage(){ 
    document.querySelector(".text1").innerHTML = "<h3>" + text[num] + "</h3>";
    num = (num+1)%text.length
}
window.onload = loopMessage;
window.setInterval(loopMessage, 3000);

var index = 0;
var player = document.querySelector("#realvid")
var vid = ["https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4",
"https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4"];
player.src = vid[index];
player.addEventListener("ended", function(){
    index = (index + 1) % vid.length;
    player.src = vid[index];
    player.play();
})

