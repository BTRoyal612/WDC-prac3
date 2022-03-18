var mcount = 0;
function countMouse() {
    mcount++;
    document.getElementById("mcount").innerHTML = mcount;
}

function post() {
    const date =  new Date();
    var content = document.getElementById("text-input").value;
    var quantity = document.getElementsByName("quantity")[0].value;

    // Create element
    var eDate = document.createElement("P");
    eDate.className = "post-time";
    eDate.innerHTML = date;
    var eContent = document.createElement("P");
    eContent.className = "post-content";
    eContent.innerHTML = content;

    // Get color
    var collection = document.getElementsByName("color");
    for (let c of collection) {
        console.log(c.value);
        if (c.checked) {
            eContent.style.color = c.value;
            break;
        }
    }

    // Append accoding to quantity
    var posts = document.getElementById("posts");
    for (let i = 0; i < quantity; i++) {
        let tempDate = eDate.cloneNode(true);
        let tempContent = eContent.cloneNode(true);

        posts.appendChild(tempDate);
        posts.appendChild(tempContent);
    }
}

function menu() {
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function back() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("main").style.display = "block";
}