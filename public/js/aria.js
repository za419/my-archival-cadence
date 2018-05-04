/**
 * ARIA's Async Engine
 */

$(document).ready(function () {
  // Place responses from the server into this
  var ariaSays = document.getElementById("ariaSays");

  // Text field, hit 'enter'
  $("#searchInput").keyup(function (event) {
    if (event.keyCode == 13) {
      $("#searchButton").click();
    }
  });
  // Clicking the search button
  $('#searchButton').click(function (e) {
    // Create a key 'search' to send in JSON
    var data = {};
    data.search = $('#searchInput').val();


    var input = $('#searchInput').val();
    // Encode < and >, for error when placed back into error message
    input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    $.ajax({
      type: 'POST',
      url: 'http://cadenceradio.com/search',
      dataType: 'application/json',
      crossDomain: true,
      data: data,
      dataType: "json",
      success: function (data) {
        // console.log("=================");
        let i = 1;

        // Create the container table
        var table = "<table id = 'searchResults'>";

        if (data.length !== 0) {
          console.log("CADENCE: Database query completed. " + data.length + " result(s) found.")
          table += "<tr><th>Title</th><th>Artist</th><th>Availability</th></tr>"

          data.forEach(function (song) {
            /*
            console.log("RESULT " + i)
            console.log("Title: " + song.title);
            console.log("Artist(s): " + song.artist);
            console.log("Album: " + song.album);
            i++;
            console.log("=================");
            */
            table += "<tr><td class='dataTitle'>" + song.title + "</td><td class='dataArtist'>" + song.artist + "</td><td class='dataRequest'><button class='requestButton' data-path='" + escape(song.path) + "'>REQUEST</button></td></tr>";
          })
        } else {
          console.log("CADENCE: Database query completed.  0 results found. :(");
          table += "<div style='padding-top: 2em'>Nothing found for search '"+input+"' :(</div>";
        }

        table += "</table>";
        // Put table into results html
        document.getElementById("results").innerHTML = table;
      },
      error: function () {
        console.log("CADENCE: Error. Could not execute search.");
      }
    });
  });



  // Request buttons
  $(document).on('click', '.requestButton', function (e) {
    // console.log(this.dataset.path); // /home/ken/Music/fripSide/01. only my railgun.mp3

    var data = {};
    data.path = unescape(this.dataset.path);

    // so when you click a working button, change it to red and disable it

    // Disable the request buttons for a certain amount of time
    $(".requestButton").prop('disabled', true);

    // Switch the request button styles so they appear red for the same amount of time
    document.getElementById('aria-request-button').href=document.location.origin+"/css/modules/aria/request-button-disabled.css";

    $.ajax({
      type: 'POST',
      url: 'http://cadenceradio.com/request',
      data: data,
      success: function (result) {
        console.log(result);
        ariaSays.innerHTML = result;
        // After five minutes, return functionality to the button and change to green
        setTimeout(function () {
          $(".requestButton").prop('disabled', false);
          document.getElementById('aria-request-button').href=document.location.origin+"/css/modules/aria/request-button.css";
        }, 1000 * 60 * 5);
      },
      error: function (result) {
        console.log(result.responseText);
        ariaSays.innerHTML = result.responseText;
        setTimeout(function () {
          $(".requestButton").prop('disabled', false);
          document.getElementById('aria-request-button').href=document.location.origin+"/css/modules/aria/request-button.css";
        }, 1000 * 60 * 5);
      }
    });
  });
});