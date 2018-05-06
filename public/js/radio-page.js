/* 
Organization of radio-page JS
-----------------------------
-Retrieve set volume from localstorage
-Retrieve service status from the status subpage

-Radio now playing artist/track info
  -Update info at an interval function

-Radio play/pause button
-Volume setter

-Changelog show/hide button
*/

// I'll put all the default onload stuff in here
function defaultPlayer() {
  // Selects either the localstorage volume or a default value
  var vol = localStorage.getItem('volumeKey') || 0.77;
  document.getElementById("volume").value = vol;
}

function closeOverlay() {
    document.getElementById("static-overlay").style.display="none"
}

$(document).ready(function() {
    document.getElementById("static-overlay").addEventListener('click', closeOverlay)
})

// Play/pause button
$(document).ready(function () {
  document.getElementById("playerToggle").addEventListener('click', function(){
  // Play/pause button
  var toggle = document.getElementById("playerToggle");
  if (toggle.innerHTML!="❚❚") {
    document.getElementById("playerToggle").innerHTML = "❚❚";
  } else {
    document.getElementById("playerToggle").innerHTML = "►";
  }
}, true)
});

// Focus to the request area
$(document).ready(function () {
  document.getElementById("playerRequest").addEventListener('click', function(){
    $('html, body').animate({
      scrollTop: $("#aria").offset().top
    }, 1500);
    $('input[name=searchInput]').focus();
  })
});


// When you change the volume
function volumeToggle(vol) {
  // Sets the new set volume into localstorage
  localStorage.setItem('volumeKey', vol);
}

// Toggle show/hide on the changelog
function toggleChangelog() {
  var old = document.getElementById("old");

  if (old.style.display === 'block') {
    old.style.display = 'none';
    document.getElementById("oldToggle").innerHTML = "Show Full History";
  } else {
    old.style.display = 'block';
    document.getElementById("oldToggle").innerHTML = "Hide Full History";
  }
}
