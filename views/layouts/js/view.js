// When user hits the search-btn
$("#search-btn").on("click", function(event) {
    event.preventDefault();
  
    // Save the hang they typed into the hang-search input
    var hangSearched = $("#hang-search").val().trim();
  
    // Make an AJAX get request to our api, including the user's hang in the url
    $.get("/api/" + hangSearched, function(data) {
  
      console.log(data);
      // Call our renderhangs function to add our hangs to the page
      renderhangs(data);
  
    });
  
  });
  
  // When user hits the name-search-btn
  $("#name-search-btn").on("click", function() {
  
    // Save the name they typed into the name-search input
    var nameSearched = $("#name-search").val().trim();
  
    // Make an AJAX get request to our api, including the user's name in the url
    $.get("/api/name/" + nameSearched, function(data) {
  
      // Log the data to the console
      console.log(data);
      // Call our renderhangs function to add our hangs to the page
      renderhangs(data);
  
    });
  
  });
  
  // When user hits the location-search-btn
  $("#location-search-btn").on("click", function() {
  
    // Save the hang they typed into the location-search input
    var locationSearched = $("#location-search").val().trim();
  
    // Make an AJAX get request to our api, including the user's location in the url
    $.get("/api/location/" + locationSearched, function(data) {
  
      console.log(data);
      // Call our renderhangs function to add our hangs to the page
      renderhangs(data);
  
    });
  
  });
  
  function renderhangs(data) {
    if (data.length !== 0) {
  
      $("#stats").empty();
      $("#stats").show();
  
      for (var i = 0; i < data.length; i++) {
  
        var div = $("<div>");
  
        div.append("<h2>" + data[i].name + "</h2>");
        div.append("<p>name: " + data[i].location + "</p>");
        div.append("<p>location: " + data[i].date + "</p>");
        div.append("<p>Pages: " + data[i].user + "</p>");
        div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE hang</button>");
  
        $("#stats").append(div);
  
      }
  
      $(".delete").click(function() {
  
        $.ajax({
          method: "DELETE",
          url: "/api/hang/" + $(this).attr("data-id")
        })
          // On success, run the following code
          .then(function() {
            console.log("Deleted Successfully!");
          });
  
        $(this).closest("div").remove();
  
      });
  
    }
  }
  