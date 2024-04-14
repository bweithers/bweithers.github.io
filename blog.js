console.log('In the js file');

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
        
      console.log(isActive);
      // Toggle the active class
      if (isActive == "yes") {
        this.setAttribute('data-active', 'no');
        filterArticles('all'); // Show all articles when tag is unclicked
      } else {
        // Add active class to clicked tag link
        this.setAttribute('data-active', 'yes');
        // console.log(this.getAttribute('active'));
        filterArticles(selectedTag); // Filter articles based on selected tag
      }
    });
  });
  