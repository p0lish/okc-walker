var timer = (Math.floor(Math.random() * 5) + 1) * 1000
var myVar = setInterval(myTimer, timer);

function myTimer() {
    console.log("loading....");
    var similars = document.querySelectorAll(".similar2015-users a");
    var randomItem = similars[Math.floor(Math.random() * similars.length)];
    randomItem.click();
}