function selectChicagoEvening() {

  var selected=document.getElementById("selected-css");
  var current=selected.href; // The URL of the currently selected theme
  current=current.substring(current.lastIndexOf('/')+1); // ...Just the filename

  // Set the transition CSS file to be that filename in the appropriate folder
  document.getElementById("transition-css").href="/css/themes/transition/"+current;

  selected.href=""

  // And set a callback to begin the transition in 16ms (one frame at 60FPS)
  setTimeout(function() {
    document.getElementById("selected-css").href = "/css/themes/chicago-evening.css";
    document.getElementById("subtitle").innerHTML = "A Rhythmic Experience";
    localStorage.setItem('themeKey', 'chicagoEvening');

    // And remove the transition
    setTimeout(function() {document.getElementById("transition-css").href=""}, 500)
  }, 16);
}

function selectCyberpunkBartender() {

  var selected=document.getElementById("selected-css");
  var current=selected.href; // The URL of the currently selected theme
  current=current.substring(current.lastIndexOf('/')+1); // ...Just the filename

  // Set the transition CSS file to be that filename in the appropriate folder
  document.getElementById("transition-css").href="/css/themes/transition/"+current;

  selected.href=""

  // And set a callback to begin the transition in 16ms (one frame at 60FPS)
  setTimeout(function() {
    var currentHour = new Date().getHours();
      
    // IF condition states the daytime hours
    // 8:00:00 PM - 9:59:59 AM
    if (currentHour >= 8 && currentHour < 22) {
      document.getElementById("selected-css").href = "/css/themes/cyberpunk-bartender.css";
    } else {
      document.getElementById("selected-css").href = "/css/themes/cyberpunk-bartender-night.css";
    }
  
    localStorage.setItem('themeKey', 'cyberpunkBartender');
    document.getElementById("subtitle").innerHTML = "A Retro Cyberpunk Jukebox";
    localStorage.setItem('themeKey', 'cyberpunkBartender');

    // And remove the transition
    setTimeout(function() {document.getElementById("transition-css").href=""}, 500)
  }, 16);
}

function selectMayberry() {

  var selected=document.getElementById("selected-css");
  var current=selected.href; // The URL of the currently selected theme
  current=current.substring(current.lastIndexOf('/')+1); // ...Just the filename

  // Set the transition CSS file to be that filename in the appropriate folder
  document.getElementById("transition-css").href="/css/themes/transition/"+current;

  selected.href=""

  // And set a callback to begin the transition in 16ms (one frame at 60FPS)
  setTimeout(function() {
    document.getElementById("selected-css").href = "/css/themes/mayberry.css";
    document.getElementById("subtitle").innerHTML = "A Rhythmic Ξxperience";
    localStorage.setItem('themeKey', 'mayberry');

    // And remove the transition
    setTimeout(function() {document.getElementById("transition-css").href=""}, 500)
  }, 16);
}

function selectElectromaster() {

  var selected=document.getElementById("selected-css");
  var current=selected.href; // The URL of the currently selected theme
  current=current.substring(current.lastIndexOf('/')+1); // ...Just the filename

  // Set the transition CSS file to be that filename in the appropriate folder
  document.getElementById("transition-css").href="/css/themes/transition/"+current;

  selected.href=""

  // And set a callback to begin the transition in 16ms (one frame at 60FPS)
  setTimeout(function() {
    document.getElementById("selected-css").href = "/css/themes/electromaster.css";
    document.getElementById("title").innerHTML = "ケイデンス";
    document.getElementById("subtitle").innerHTML = "A Certain Scientific Radio";
    localStorage.setItem('themeKey', 'electromaster');

    // And remove the transition
    setTimeout(function() {document.getElementById("transition-css").href=""}, 500)
  }, 16);
}

// This is run onload. To change the default theme, (for users that have not yet picked one) change the statement for null
function defaultTheme() {
  var theme = localStorage.getItem('themeKey');
  if (theme === "chicagoEvening") {
    selectChicagoEvening();
  } else if (theme === "cyberpunkBartender") {
    selectCyberpunkBartender();
  } else if (theme === "mayberry") {
    selectMayberry();
  } else if (theme === "electromaster") {
    selectElectromaster();
  } else if (theme === null) {
    selectChicagoEvening();
  }
}

// Reselects for time-based themes at a set interval
window.setInterval(function(){
  defaultTheme();
}, 1000);
