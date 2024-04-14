console.log('In the js file');

function filterArticles(tag) {
  const articles = document.querySelectorAll('.post');
  articles.forEach(article => {
    console.log(article.getAttribute('data-tags'));
    
    if (article.getAttribute('data-tags') == null) {
      article.style.display = 'none';
      return;
    }
    const tags = article.getAttribute('data-tags').split(' ');
    console.log(tags);
    if (tags.includes(tag)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
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
