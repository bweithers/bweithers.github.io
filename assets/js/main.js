var left = null;
var centerPane = null;
var lock = 0;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const handleOnClick = e => {
    if (e.target.id != 'right-side' && e.target.id != 'left-side'){
        console.log(e.target.id);
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
    console.log(left.style.top + left.style.height);
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

// document.getElementById("kwargs-link").onmouseover = event => {
//     let iterations = 0;
//     const interval = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//         .map(letter => letters[Math.floor(Math.random() * 26)])
//         .join("");

//         if (iterations++ >= 20) clearInterval(interval);
//         iterations++;
//     }
//     ,50);
// }



let interval = null;

document.getElementById("kwargs-link").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index+1 < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}