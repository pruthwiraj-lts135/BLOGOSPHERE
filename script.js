/* =========================================
   BLOGOSPHERE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}


/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeToggle.textContent = "☾";
        } else {
            themeToggle.textContent = "☀";
        }

    });

}


/* =========================================
   SEARCH
========================================= */

const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const searchValue = searchInput.value.trim();

        if (searchValue === "") {
            alert("Please enter something to search.");
            return;
        }

        window.location.href =
            `explore.html?search=${encodeURIComponent(searchValue)}`;

    });

}


/* =========================================
   LOGIN FORM
========================================= */

const loginForm = document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Login successful!");

        window.location.href = "dashboard.html";

    });

}


/* =========================================
   REGISTER FORM
========================================= */

const registerForm = document.getElementById("register-form");

if (registerForm) {

    registerForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const password =
            document.getElementById("register-password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}



/* =========================================
   CREATE BLOG
========================================= */

const coverImage = document.getElementById("cover-image");
const imagePreview = document.getElementById("image-preview");


/* Image Preview */

if (coverImage) {

    coverImage.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (event) {

                imagePreview.src = event.target.result;

                imagePreview.style.display = "block";

            };

            reader.readAsDataURL(file);

        }

    });

}


/* Rich Text Editor */

const editorButtons =
    document.querySelectorAll(".editor-toolbar button[data-command]");

editorButtons.forEach(button => {

    button.addEventListener("click", function () {

        const command =
            this.dataset.command;

        const value =
            this.dataset.value || null;

        document.execCommand(
            command,
            false,
            value
        );

    });

});


/* Insert Link */

const linkButton =
    document.getElementById("link-button");

if (linkButton) {

    linkButton.addEventListener("click", () => {

        const url =
            prompt("Enter the link URL:");

        if (url) {

            document.execCommand(
                "createLink",
                false,
                url
            );

        }

    });

}


/* Save Draft */

const saveDraft =
    document.getElementById("save-draft");

if (saveDraft) {

    saveDraft.addEventListener("click", () => {

        alert("Your blog has been saved as a draft!");

    });

}


/* Publish Blog */

const blogForm =
    document.getElementById("blog-form");

if (blogForm) {

    blogForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const content =
            document
                .getElementById("blog-content")
                .innerHTML
                .trim();

        if (content === "") {

            alert("Please write some content before publishing.");

            return;

        }

        alert("Your blog has been published successfully!");

        window.location.href = "dashboard.html";

    });

}


/* =========================================
   EXPLORE SEARCH
========================================= */

const exploreSearchInput =
    document.getElementById("explore-search-input");

const exploreSearchButton =
    document.getElementById("explore-search-btn");

const exploreCards =
    document.querySelectorAll(".explore-grid .blog-card");


function searchBlogs() {

    if (!exploreSearchInput) return;

    const searchTerm =
        exploreSearchInput.value
            .toLowerCase()
            .trim();

    exploreCards.forEach(card => {

        const cardText =
            card.textContent.toLowerCase();

        if (cardText.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}


if (exploreSearchButton) {

    exploreSearchButton.addEventListener(
        "click",
        searchBlogs
    );

}


if (exploreSearchInput) {

    exploreSearchInput.addEventListener(
        "input",
        searchBlogs
    );

}

/* =========================================
   COMMENTS
========================================= */

const commentForm =
    document.getElementById("comment-form");

const dynamicComments =
    document.getElementById("dynamic-comments");


if (commentForm) {

    commentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const username =
                document
                    .getElementById("comment-username")
                    .value;

            const commentText =
                document
                    .getElementById("comment-text")
                    .value;


            const initials =
                username
                    .split(" ")
                    .map(name => name[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2);


            const comment =
                document.createElement("div");

            comment.classList.add("comment");


            comment.innerHTML = `

                <div class="comment-avatar">
                    ${initials}
                </div>

                <div class="comment-content">

                    <div class="comment-top">

                        <strong>
                            ${username}
                        </strong>

                        <span>
                            Just now
                        </span>

                    </div>

                    <p>
                        ${commentText}
                    </p>

                </div>

            `;


            dynamicComments.appendChild(comment);

            commentForm.reset();

        }
    );

}


/* =========================================
   BLOGOSPHERE - MAIN JAVASCRIPT
========================================= */


/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeToggle.textContent = "🌙";
        } else {
            themeToggle.textContent = "☀";
        }

    });

}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show-menu");

    });

}


/* =========================================
   LOGIN FORM
========================================= */

const loginForm = document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Login successful!");

        window.location.href = "dashboard.html";

    });

}


/* =========================================
   REGISTER FORM
========================================= */

const registerForm = document.getElementById("register-form");

if (registerForm) {

    registerForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const password =
            document.getElementById("register-password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}


/* =========================================
   CREATE BLOG - IMAGE PREVIEW
========================================= */

const coverImage = document.getElementById("cover-image");
const imagePreview = document.getElementById("image-preview");

if (coverImage && imagePreview) {

    coverImage.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (event) {

                imagePreview.src = event.target.result;
                imagePreview.style.display = "block";

            };

            reader.readAsDataURL(file);

        }

    });

}


/* =========================================
   RICH TEXT EDITOR
========================================= */

const editorButtons =
    document.querySelectorAll(
        ".editor-toolbar button[data-command]"
    );

editorButtons.forEach(button => {

    button.addEventListener("click", function () {

        const command = this.dataset.command;

        const value =
            this.dataset.value || null;

        document.execCommand(
            command,
            false,
            value
        );

    });

});


/* =========================================
   INSERT LINK
========================================= */

const linkButton =
    document.getElementById("link-button");

if (linkButton) {

    linkButton.addEventListener("click", () => {

        const url =
            prompt("Enter the link URL:");

        if (url) {

            document.execCommand(
                "createLink",
                false,
                url
            );

        }

    });

}


/* =========================================
   SAVE DRAFT
========================================= */

const saveDraft =
    document.getElementById("save-draft");

if (saveDraft) {

    saveDraft.addEventListener("click", () => {

        const title =
            document.getElementById("blog-title").value;

        if (!title.trim()) {

            alert("Please enter a blog title first.");

            return;

        }

        const draft = {

            title: title,

            category:
                document
                    .getElementById("blog-category")
                    .value,

            tags:
                document
                    .getElementById("blog-tags")
                    .value,

            content:
                document
                    .getElementById("blog-content")
                    .innerHTML,

            status: "draft"

        };


        localStorage.setItem(
            "blogosphereDraft",
            JSON.stringify(draft)
        );

        alert("Your blog has been saved as a draft!");

    });

}


/* =========================================
   PUBLISH BLOG
========================================= */

const blogForm =
    document.getElementById("blog-form");

if (blogForm) {

    blogForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const title =
                document
                    .getElementById("blog-title")
                    .value
                    .trim();

            const category =
                document
                    .getElementById("blog-category")
                    .value;

            const tags =
                document
                    .getElementById("blog-tags")
                    .value
                    .trim();

            const content =
                document
                    .getElementById("blog-content")
                    .innerHTML
                    .trim();


            if (!content) {

                alert(
                    "Please write some content before publishing."
                );

                return;

            }


            const image =
                imagePreview &&
                imagePreview.src &&
                imagePreview.style.display === "block"
                    ? imagePreview.src
                    : "";


            const newBlog = {

                id: Date.now(),

                title: title,

                category: category,

                tags: tags,

                content: content,

                image: image,

                author: "Blogosphere Writer",

                date: new Date()
                    .toLocaleDateString(
                        "en-US",
                        {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        }
                    ),

                views: 0

            };


            const blogs =
                JSON.parse(
                    localStorage.getItem(
                        "blogosphereBlogs"
                    )
                ) || [];


            blogs.unshift(newBlog);


            localStorage.setItem(
                "blogosphereBlogs",
                JSON.stringify(blogs)
            );


            alert(
                "Your blog has been published successfully!"
            );


            window.location.href = "dashboard.html";

        }
    );

}


/* =========================================
   UPDATE DASHBOARD STATISTICS
========================================= */

const blogs =
    JSON.parse(
        localStorage.getItem("blogosphereBlogs")
    ) || [];

const totalBlogsElement =
    document.getElementById("total-blogs");

const totalViewsElement =
    document.getElementById("total-views");

if (totalBlogsElement) {

    totalBlogsElement.textContent =
        blogs.length;

}

if (totalViewsElement) {

    const totalViews =
        blogs.reduce(
            (total, blog) =>
                total + (blog.views || 0),
            0
        );

    totalViewsElement.textContent =
        totalViews;

}


/* =========================================
   EXPLORE SEARCH
========================================= */

const exploreSearchInput =
    document.getElementById(
        "explore-search-input"
    );

const exploreSearchButton =
    document.getElementById(
        "explore-search-btn"
    );

const exploreCards =
    document.querySelectorAll(
        ".explore-grid .blog-card"
    );


function searchBlogs() {

    if (!exploreSearchInput) return;

    const searchTerm =
        exploreSearchInput.value
            .toLowerCase()
            .trim();


    exploreCards.forEach(card => {

        const cardText =
            card.textContent.toLowerCase();


        if (cardText.includes(searchTerm)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


if (exploreSearchButton) {

    exploreSearchButton.addEventListener(
        "click",
        searchBlogs
    );

}


if (exploreSearchInput) {

    exploreSearchInput.addEventListener(
        "input",
        searchBlogs
    );


    /* Read search from Home page URL */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const searchQuery =
        urlParams.get("search");

    if (searchQuery) {

        exploreSearchInput.value =
            searchQuery;

        searchBlogs();

    }

}


/* =========================================
   COMMENTS
========================================= */

const commentForm =
    document.getElementById("comment-form");

const dynamicComments =
    document.getElementById(
        "dynamic-comments"
    );


if (commentForm && dynamicComments) {

    commentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                document
                    .getElementById(
                        "comment-username"
                    )
                    .value
                    .trim();


            const commentText =
                document
                    .getElementById(
                        "comment-text"
                    )
                    .value
                    .trim();


            if (!username || !commentText) {

                return;

            }


            const initials =
                username
                    .split(" ")
                    .map(
                        name => name[0]
                    )
                    .join("")
                    .toUpperCase()
                    .slice(0, 2);


            const comment =
                document.createElement("div");

            comment.classList.add("comment");


            /* Create elements safely */

            comment.innerHTML = `
                <div class="comment-avatar">
                    ${initials}
                </div>

                <div class="comment-content">

                    <div class="comment-top">

                        <strong></strong>

                        <span>
                            Just now
                        </span>

                    </div>

                    <p></p>

                </div>
            `;


            comment.querySelector("strong")
                .textContent = username;

            comment.querySelector("p")
                .textContent = commentText;


            dynamicComments.appendChild(
                comment
            );


            commentForm.reset();

        }
    );

}