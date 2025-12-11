// Expand/Collapse Blog Post Content
document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll("main article");

    articles.forEach(article => {
        const readMoreLink = article.querySelector("a");
        const fullText = article.querySelector("p").textContent;

        // Store the full text in a data attribute
        article.querySelector("p").dataset.fullText = fullText;

        readMoreLink.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            const para = article.querySelector("p");
            
            if (readMoreLink.textContent === "Read More") {
                para.textContent += " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; 
                readMoreLink.textContent = "Read Less";
            } else {
                para.textContent = para.dataset.fullText;
                readMoreLink.textContent = "Read More";
            }
        });
    });
});
