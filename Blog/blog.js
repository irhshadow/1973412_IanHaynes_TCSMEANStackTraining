var postTitle;
var postPicture;
var postValue;
var test;

function createPost() {
    postTitle = document.getElementById("title").value;
    postPicture = addedImage.files[0];
    postValue = document.getElementById("articles").value;
    document.getElementById("entry").reset();
    localStorage.setItem("postTitle", postTitle);
    localStorage.setItem("postValue", postValue);
    try {
        localStorage.setItem("postPicture", URL.createObjectURL(postPicture));
    } catch {
        localStorage.removeItem("postPicture");
    };

    (function post() {
        newPost = document.createElement("div");
        newPost.className = "blogPost";

        newTitle = document.createElement("div");
        newTitle.className = "title";
        newTitle.innerHTML = localStorage.getItem("postTitle");

        newPicture = document.createElement("img");
        newPicture.className = "postImage";
        try {
            newPicture.src = localStorage.getItem("postPicture");
        } catch { };


        newArticle = document.createElement("div");
        newArticle.className = "article";
        newArticle.innerHTML = localStorage.getItem("postValue");


        newPost.appendChild(newTitle);
        if (!newPicture.src.includes("/null"))
            newPost.appendChild(newPicture);
        newPost.appendChild(newArticle);
        blogSection = document.getElementById("blogSection")
        blogSection.insertBefore(newPost, blogSection.firstElementChild)
    }());
}
