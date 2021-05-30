
function show() {
    let p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    let p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

let pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        eye.style.color="purple";
        eye.style.background="white";
        pwShown = 1;
        show();
    } else {
        eye.style.color="rgb(37, 35, 35)";
        eye.style.background="grey";
        pwShown = 0;
        hide();
    }
} ,false);






 