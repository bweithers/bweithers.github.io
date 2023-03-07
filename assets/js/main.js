var left = null;
var centerPane = null;
var lock = 0;

const handleOnClick = e => {
    if (e.target.id != 'right-side' && e.target.id != 'left-side'){
        return;
    }
    lock = (lock+1)%3;
    if (lock == 1){
        document.getElementById("left-side").style.width = '100%';
    }
    if (lock == 2){
        document.getElementById("left-side").style.width = '0%';
    }
    handleOnMove(e);
}
const handleOnMove = e => {
    if (lock != 0){return;}
    while (left === null){
        left = document.getElementById("left-side");
    }
    var p = e.clientX / window.innerWidth * 100;
    if (e.clientY > 1000){p=100;}
    if (p < 0.5){
        p=0.0;
    }
    if (p > 99.5){
        p=100;
    }
    left.style.width = p+'%';
}

document.onmousedown = e => {

    handleOnClick(e);
}

document.onmousemove = e => {
    handleOnMove(e);
}

document.ontouchmove = e => {
    handleOnMove(e);
}