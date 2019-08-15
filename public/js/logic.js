$(".dropdown-menu li a").click(function() {
  $(this)
    .parents(".dropdown")
    .find(".btn")
    
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

$("#tagAlongModal").click(function() {
    $(this).modal();
  });
