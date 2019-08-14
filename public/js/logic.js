$(".dropdown-menu li a").click(function() {
  $(this)
    .parents(".dropdown")
    .find(".btn")
    // eslint-disable-next-line prettier/prettier
    .html($(this).text() + " <span class=\"caret\"></span>");
  $(this)
    .parents(".dropdown")
    .find(".btn")
    .val($(this).data("value"));
});

$("#signupModal").click(function() {
  $(this).modal();
});

$("#loginModal").click(function() {
  $(this).modal();
});

$("#submitBtn").click(function() {
  $(this).modal();
});

$("#signupsubmit").click(function() {
  var username = $("#joinusrname").val();
  var password = $("#joinpsw").val();

  var userObj = {
    user_name: username,
    user_password: password
  };

  $.post("/api/user", userObj, function(data) {
    console.log(data);
  });
});

$("#loginsubmit").click(function() {
  var username = $("#loginusrname").val();
  var password = $("#loginpsw").val();

  var userObj = {
    user_name: username,
    user_password: password
  };

  $.post("/api/login", userObj, function(data) {
    console.log(data);

    window.location.href = "/post";
  });
});

