const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


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
      
        return letters[Math.floor(Math.random() * 26)]
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