$('#sidebarCollapse').on('click', function () {
    $('#sidebar').slideToggle("slow", "linear", function () {
      $('.text').toggleClass('addMargin');
      $('#sidebarCollapse').toggleClass('addMargin');
    });
  });