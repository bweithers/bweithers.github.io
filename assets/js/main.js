var left = null;

const handleOnMove = e => {
    while (left === null){
        left = document.getElementById("left-side");
    }
    const p = e.clientX / window.innerWidth * 100;
    left.style.width = p+'%';
    console.log(left.style.width)
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