/**
 * ARIA's Async Engine
 */

$(document).ready(function () {
  // Text field, hit 'enter'
  $("#searchInput").keyup(function (event) {
    if (event.keyCode == 13) {
      $("#searchButton").click();
    }
  });
  // Clicking the search button
  $('#searchButton').click(function (e) {
  });
});
