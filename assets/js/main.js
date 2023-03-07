var left = null;
var centerPane = null;

const handleOnMove = e => {
    while (left === null){
        left = document.getElementById("left-side");
    }
    var p = e.clientX / window.innerWidth * 100;
    if (e.clientY > 1000){p=100}
    if (p < 0.5){
        p=0.0;
    }
    if (p > 99.5){
        p=100;
    }
    left.style.width = p+'%';
}

document.onmousedown = e => {
    handleOnMove(e);
}

document.onmousemove = e => {
    handleOnMove(e);
}

document.ontouchmove = e => {
    handleOnMove(e);
}