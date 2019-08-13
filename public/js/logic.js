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
