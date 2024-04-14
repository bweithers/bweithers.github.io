console.log('In the js file');

// Function to filter articles based on selected tag
function filterArticles(tag) {
    const articles = document.querySelectorAll('.post');
  
    articles.forEach(article => {
      const tags = article.querySelectorAll('.tag'); // Select all tags within the article
      let tagFound = false; // Flag to indicate if the tag is found within the article
  
      tags.forEach(tagElement => {
        const tagValue = tagElement.getAttribute('data-tag');
        console.log(tagElement);
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
