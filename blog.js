// Function to filter articles based on selected tag
function filterArticles(tag) {
    const articles = document.querySelectorAll('.post');
    if (tag == 'all') {
      articles.forEach(article => {
        article.style.display = 'block';
      });
      return;
    }
    articles.forEach(article => {
      const tags = article.querySelectorAll('.tag'); // Select all tags within the article
      let tagFound = false; // Flag to indicate if the tag is found within the article
  
      tags.forEach(tagElement => {
        const tagValue = tagElement.getAttribute('data-tag');
        // console.log(tagElement);
        if (tagValue === tag) {
          tagFound = true; // Set flag to true if the tag is found
        }
      });
  
      // Set display style based on whether the tag is found
      article.style.display = (tagFound) ? 'block' : 'none';
    });
  }
  

document.querySelectorAll('.tags-menu li').forEach(tagLink => {
  tagLink.addEventListener('click', function(event) {
    event.preventDefault();
    // console.log(tagLink.getAttribute('data-tag'));
    const selectedTag = this.getAttribute('data-tag');
    filterArticles(selectedTag);
  });
});

// Event listener for tag links
document.querySelectorAll('.tags-menu li').forEach(tagLink => {
    tagLink.addEventListener('click', function(event) {
      event.preventDefault();
      const selectedTag = this.getAttribute('data-tag');
      const isActive = this.getAttribute('data-active'); // Check if the tag is active
        
    //   console.log(isActive);
      // Toggle the active class
      const link = this.querySelector('a');
      if (isActive == "yes") {
        this.setAttribute('data-active', 'no');
        link.style.backgroundColor = '#f0f0f0';
        link.style.color = 'black';
        filterArticles('all'); // Show all articles when tag is unclicked
      } else {
        this.setAttribute('data-active', 'yes');
        // Select the link element inside the tag
        
        // Set the background color of the link to red (you can use any color)
        link.style.backgroundColor = 'var(--left-bg-color)';
        link.style.color = 'white';
        filterArticles(selectedTag); // Filter articles based on selected tag
      }
    });
  });
  
  let interval = null;
  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*|";
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  // const cypher = 'brianw.gamer';
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
          if(letter == '.'){return '.'}
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