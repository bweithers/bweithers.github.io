var left = null;
var centerPane = null;
var lock = 0;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*|";

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
        sides = document.getElementById("sides")
    
    }
    // if (e.target.id != 'right-side' && e.target.id != 'left-side' && e.target.classList.value != 'fancy' && e.target.classList.value != 'title'){
    // //   console.log(left.style.width);
    // //   console.log(Number(left.style.width.replace('%','')));
    // //   left.style.width = Math.round(Number(left.style.width))+'%';
      
    // //   // console.log(Math.round(Number(left.style.width))*100+'%');
    //   return;
    // }
    const sides_rect = sides.getBoundingClientRect();
    // var p = e.clientX / innerWindow.width * 100;
    var p = (e.clientX - sides_rect.left) / (sides_rect.right - sides_rect.left) * 100;
    // console.log(sides_rect.top, sides_rect.bottom, sides_rect.left, sides_rect.right);
    // console.log(e.clientX, e.clientY);
    //if (e.clientY > sides_rect.top || e.clientY < sides_rect.bottom || e.clientX < sides_rect.left || e.clientX > sides_rect.right){return;};
    if (p < 0.5){
        p=0.0;
    }
    if (p > 99.5){
        p=100;
    }
    left.style.width = p+'%';
    console.log(p+'%');
}

document.onmousedown = e => {
    handleOnClick(e);
}

document.onmousemove = e => {
    handleOnMove(e);
}

// document.ontouchmove = e => {
//     handleOnMove(e);
// }



let interval = null;

document.getElementById("kwargs-link").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (letter == '.'){return '.'}
        if(index+1 < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * letters.length)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

document.getElementById("kwargs-link").onmouseleave = event => {  
  let iteration = 0;
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("").map(
      (letter, index) => {
        if (letter == '.'){return '.'}
        if(event.target.innerText.length - index + 1 < iteration) {
          return letters[Math.floor(Math.random() * letters.length)]
          
        }

        return event.target.dataset.value[index];
      })
      .join("");
    
    if(iteration > event.target.dataset.value.length + 1){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

document.getElementById("kwargs-link").onload = event => {  
  let iteration = 0;
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("").map(
      (letter, index) => {
        if (letter == '.'){return '.'}
        if(event.target.innerText.length - index + 1 < iteration) {
          return letters[Math.floor(Math.random() * letters.length)]
          
        }

        return event.target.dataset.value[index];
      })
      .join("");
    
    if(iteration > event.target.dataset.value.length + 1){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}