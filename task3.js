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
    var dateContent = document.createElement("DIV");
    dateContent.style.display = "block";
    dateContent.appendChild(eDate);
    dateContent.appendChild(eContent);

    // Get color
    var colorCollection = document.getElementsByName("color");
    for (let color of colorCollection) {
        if (color.checked) {
            eContent.style.color = color.value;
            break;
        }
    }

    // Get bold or italic
    var styleCollection = document.getElementsByName("style");
    for (let s of styleCollection) {
        if (s.checked) {
            eContent.style.fontWeight = s.value;
            eContent.style.fontStyle = s.value;
        }
    }

    // // Get postion in post
    // var sel = document.querySelector(".left select");
    // var position = sel.value;

    // // Create option
    // var opt = document.createElement("OPTION");
    // opt.appendChild(document.createTextNode(content));
    // console.log(opt);

    // // Where to add post
    var posts = document.querySelector("#posts");
    // if (position == -1) {
    //     position = posts.children.length;
    // }
    // console.log(position);

    // Append accoding to quantity
    // var q = posts.children;
    for (let i = 0; i < quantity; i++) {
        posts.appendChild(dateContent.cloneNode(true));
        // posts.insertBefore(dateContent.cloneNode(true), q[++position]);
        // let opttemp = opt.cloneNode(true);
        // sel.insertBefore(opttemp, sel[++position]);
    }
    // console.log(sel);
    // console.log(posts);

    // Update value in option
    // for (let i = 1; i < sel.length; i++) {
    //     sel[i].value = i-1;
    // }

    // Display posts
    displayPost();
}

function menu() {
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

function back() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function changeBackgroundColor() {
    const BGcolor = document.querySelector('input[type=text]').value;
    document.body.style.backgroundColor = BGcolor;
}

function displayPost() {
    const visible = document.querySelector('input[type=range]').value;
    var posts = document.querySelectorAll("#posts > div");

    for (let post of posts) {
        post.style.display = "block";
    }

    if (visible < posts.length) {
        for (let i = posts.length - 1; i >= visible; i--) {
            posts[i].style.display = "none";
        }
    }
}