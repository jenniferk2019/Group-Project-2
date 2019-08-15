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
        
        var isValid = true;

        if(newPost.category === null || newPost.category === "") {
            isValid = false;
        }

        if(newPost.name === null || newPost.name === "") {
            isValid = false;
        }

        if(newPost.location === null || newPost.location === "") {
            isValid = false;
        }

        if(newPost.date === null || newPost.date === "") {
            isValid = false;
        }

        if(newPost.details === null || newPost.details === "") {
            isValid = false;
        }

        if(isValid === true) {
            $.ajax("/api/addhangout", {
                type: "POST",
                data: newPost
            }).then(function(res) {
                console.log("added post " + res);
                window.location.href = "/join";
            });
        }
    });
});