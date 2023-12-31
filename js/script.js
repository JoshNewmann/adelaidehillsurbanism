document.addEventListener("DOMContentLoaded", function () {
    const articlesList = document.getElementById("articleList");
    let articleNumber = 1;
    
    function checkAndAddArticle() {
        const articleFileName = `article${articleNumber}.txt`;
        fetch(`articles/${articleFileName}`)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    return Promise.reject("Article not found");
                }
            })
            .then(articleContent => {
                const lines = articleContent.split('\n');
                const title = lines[0];
                const author = lines[1];
                
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.textContent = `${title} by ${author}`;
                anchor.href = `https://ahu.joshnewman6.com/read?article=${articleNumber}`;
                listItem.appendChild(anchor);
                articlesList.appendChild(listItem);
                articleNumber++;
                checkAndAddArticle(); // Check the next article
            })
            .catch(error => {
                if (error === "Article not found") {
                    // No more articles to add
                } else {
                    console.error("Error loading article content: " + error);
                }
            });
    }

    // Start the loop
    checkAndAddArticle();
});
