$(document).ready(function () {
    var nameInput = ("#name");
    var locationInput = ("#location");
    var dateInput = ("#date");
    var userId = ("#userId");
    var activityInput = ("#activity")

    $(postForm).on("submit", postFormSubmit);

    var url = window.location.search;
    var postId;
    var categoryId;
    var updating = false;

    if (url.indexOf("?post_id") !== -1) {
        postId = url.split("=")[1];
        getPostData(postId, "post");
    };
    else if (url.indexOf("?category_id") !== -1) {
        categoryId = url.split("=")[1];
    };
    getCategories();

    function handleFormSubmit(event) {
        event.preventDefault();
        if(!nameInput.val().trim() || !locationInput.val().trim() || !dateInput.val().trim() || !userId.val().trim() || !activityInput.val().trim() ||) {
            return;
        }
        var newPost = {
            name: nameInput.val().trim(), 
            location: locationInput.val().trim(),
            date: dateInput.val().trim(),
            user: userId.val().trim(),
            activity: activityInput.val().trim(),
        };
        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        }
    }

    function submitPost(post) {
        $.post("/api/")
    }

});