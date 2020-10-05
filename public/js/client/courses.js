// var score = document.querySelector("#score")
// var duration = document.querySelector("#duration")
// var topic = document.querySelector("#topic")
// var resultBtn = document.querySelector("#result")
// var table = document.querySelector("table")

$('#sidebarCollapse').on('click', function () {
  $('#sidebar').slideToggle("slow", "linear", function () {
    $('.text').toggleClass('addMargin');
    $('#sidebarCollapse').toggleClass('addMargin');
  });
});

