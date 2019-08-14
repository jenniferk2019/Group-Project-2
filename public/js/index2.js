// $(document).ready(function() {
//     var nameInput = ("#name");
//     var locationInput = ("#location");
//     var dateInput = ("#date");
//     var activityInput = ("#activity");

//     $(postForm).on("submit", handleFormSubmit);

//     var url = window.location.search;
//     var nameId;
//     var postId;
//     var categoryId;
//     var updating = false;

// if (url.indexOf("?posts_id") !== -1) {
//     postId = url.split("=")[1];
//     getPostData(postId, "post");
// }
// else if (url.indexOf("?category_id") !== -1) {
//     categoryId = url.split("=")[1];
// };
// getCategories();

// function handleFormSubmit(event) {
//     event.preventDefault();
//     if (!nameInput.val().trim() || !locationInput.val().trim() || !dateInput.val().trim() || !activityInput.val().trim()) {
//         return;
//     }
//     var newPost = {
//         name: nameInput.val().trim(),
//         location: locationInput.val().trim(),
//         date: dateInput.val().trim(),
//         user: userId.val().trim(),
//         activity: activityInput.val().trim(),
//     };
//     if (updating) {
//         newPost.id = postId;
//         updatePost(newPost);
//     }
//     else {
//         submitPost(newPost);
//     }
// }

// function submitPost(post) {
//     $.post("/api/posts", post, function() {
//         window.location.href = "/category";
//     });
// }

// function getPostData(id, type) {
//     var queryURL;
//     switch (type) {
//         case "post":
//             queryURL = "/api/posts/" + id;
//             break;
//         case "category":
//             queryURL = "/api/category/" + id;
//             break;
//     }
//     $.get(queryURL, function(data) {
//         if (data) {
//             console.log(data.categoryId || data.id);
//             locationInput.val(data.location);
//             nameInput.val(data.name);
//             dateInput.val(data.date);
//             activityInput.val(date.activity);
//             updating = true;
//         }
//     });
// }

// function getCategories() {
//     $.get("/api/category".renderCategoryList);
// }
// function renderCategoryList(data) {
//     if (!data.length) {
//         window.location.href = "/category";
//     }
//     var rowsToAdd = [];
//     for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createCategoryRow(data[i]));
//     }
//     activityInput.empty();
//     console.log(rowsToAdd);
//     console.log(activityInput);
//     activityInput.append(rowsToAdd);
//     activityInput.val(categoryId);
// }

// function updatePost(post) {
//     $.ajax({
//         method: "PUT",
//         url: "/api/posts",
//         data:post
//     }).then(function() {
//         window.location.href = "/category"
//     })
// }
// }

$(function () {
    $(document).on("click", "#addHangoutButton", function (event) {
        event.preventDefault();
        console.log("adding event");
        var newPost = {
            category: $("#category").val().trim(),
            name: $("#name").val().trim(),
            location: $("#location").val().trim(),
            date: $("#date").val().trim(),
            details: $("#details").val().trim()
        };
        $.ajax("/api/addhangout", {
            type: "POST",
            data: newPost
        }).then(function(res) {
            console.log("added post " + res);
        });
    });
});