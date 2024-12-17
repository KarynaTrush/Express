document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".buttons a"); 
    const pageContent = document.getElementById("page-content");
    const homePage = "index.html";
    let currentUrl = window.location.pathname;

    function updateTitle(newTitle) {
        document.title = newTitle;
    }

    async function loadPage(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to load the page.");

            const parser = new DOMParser();
            const doc = parser.parseFromString(await response.text(), "text/html");
            const newContent = doc.querySelector("body").innerHTML;
            const newTitle = doc.querySelector("title") ? doc.querySelector("title").innerText : "Dance Ensemble \"Express\"";

            pageContent.style.opacity = 0;
            setTimeout(() => {
                pageContent.innerHTML = newContent;
                updateTitle(newTitle); 
                pageContent.style.opacity = 1;

                if (url !== currentUrl) {
                    window.history.pushState({ path: url }, newTitle, url);
                    currentUrl = url;
                }
            }, 300);
        } catch (error) {
            console.error(error);
            window.location.href = url; 
        }
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const url = link.getAttribute("href");
            if (url !== currentUrl) {
                loadPage(url);
            }
        });
    });

    window.addEventListener("popstate", (event) => {
        const url = event.state ? event.state.path : homePage;
        if (url !== currentUrl) {
            loadPage(url);
        }
    });

    updateTitle("Dance Ensemble \"Express\"");
});
