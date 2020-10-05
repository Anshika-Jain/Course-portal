

$('#sidebarCollapse').on('click', function () {
  $('#sidebar').slideToggle("slow", "linear", function () {
    $('.text').toggleClass('addMargin');
    $('#sidebarCollapse').toggleClass('addMargin');
  });
});



// topic.textContent = "Topic1"
// score.textContent = localStorage.getItem("resultValue")
// duration.textContent = localStorage.getItem("timeTaken")

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Maths (in %)", "English (in %)", "Unscored (in %)"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#dbdbdb"
      ],
      data: [35,40,25]
    }]
  }
});