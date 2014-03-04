$(function() {
  $("#toggler").on('click', function(e) {
        e.preventDefault();
        var value = $(this).text()
        if (value == "Open sesame >>") {
            $(this).text("Close sesame <<")
        } else {
            $(this).text("Open sesame >>")
        }
        $('nav').toggle("bounce")
  })
})
