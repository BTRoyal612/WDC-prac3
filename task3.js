var mcount = 0;
function countMouse() {
    mcount++;
    document.getElementById("mcount").innerHTML = mcount;
}

function post() {
    const d =  new Date();
    document.getElementsByClassName("post-time")[0].innerHTML = d;
    var p = document.getElementById("text-input").value;
    document.getElementsByClassName("post-content")[0].innerHTML = p;
}

function menu() {
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function back() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("main").style.display = "block";
}