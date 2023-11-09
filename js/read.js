// JavaScript code to load and display the article content
window.addEventListener('DOMContentLoaded', (event) => {
    // Get the query parameter 'article' from the URL
    const url = new URL(window.location.href);
    const articleNumber = url.searchParams.get('article');

    if (articleNumber) {
        // Load the corresponding article file
        const articleFileName = `articles/article${articleNumber}.txt`;

        fetch(articleFileName)
            .then(response => response.text())
            .then(data => {
                // Split the content into lines
                const lines = data.split('\n');

                // Set the title, author, and date
                const articleTitle = lines[0];
                const articleAuthor = lines[1];
                const articleDate = lines[2]; // Added line to extract the date
                document.getElementById('article-title').textContent = articleTitle;
                document.getElementById('article-author').textContent = `by ${articleAuthor} on ${articleDate}`;

                // Convert newline characters to two <br> tags in the content
                const articleContent = lines.slice(3).map(line => line + '<br><br>').join('');
                document.getElementById('article-content').innerHTML = articleContent;

                // Set the article title as the page title
                document.title = `${articleTitle} by ${articleAuthor}`;
            })
            .catch(error => {
                console.error(`Error loading article: ${error}`);
            });
    } else {
        console.error('Article parameter not found in the URL');
    }
});