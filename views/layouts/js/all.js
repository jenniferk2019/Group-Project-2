
// Make a get request to our api route that will return every event
$.get("/api/all", function (data) {
    for (var i = 0; i < data.length; i++) {
        var wellSection = $("<div>");
        // Add a class to this div: 'well'
        wellSection.addClass("well");
        // Add an id to the well to mark which well it is
        wellSection.attr("id", "event-well-" + i);
        // Append the well to the well section
        $("#well-section").append(wellSection);

        // Now  we add our event data to the well we just placed on the page
        $("#event-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].name + "</h2>");
        $("#event-well-" + i).append("<h3>Location: " + data[i].location + "</h4>");
        $("#event-well-" + i).append("<h3>Date: " + data[i].date + "</h4>");
        $("#event-well-" + i).append("<h3>User: " + data[i].user + "</h4>");
    });
