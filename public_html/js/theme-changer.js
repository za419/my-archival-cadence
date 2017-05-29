// Helper function: Does the work of setting theme color for all meta tags
function setThemeColor(color) {
    document.getElementById("chrome-color").content=color;
    document.getElementById("ie-color").content=color;
}

function selectChicagoEvening() {
  cancelSwitcher();

  document.getElementById("selected-css").href = "/css/themes/chicago-evening.css";
  document.getElementById("title").innerHTML = "CADENCE";
  document.getElementById("subtitle").innerHTML = "A Rhythmic Experience";

  setThemeColor("#1D2951"); // A dark navy

  localStorage.setItem('themeKey', 'chicagoEvening');
}

function selectCyberpunkBartender() {
  cancelSwitcher();

  document.getElementById("title").innerHTML = "CADENCE";
  document.getElementById("subtitle").innerHTML = "A Retro Cyberpunk Jukebox";

  var currentHour = new Date().getHours();

  // IF condition states the daytime hours
  // 8:00:00 PM - 9:59:59 AM
  if (currentHour >= 8 && currentHour < 22) {
    document.getElementById("selected-css").href = "/css/themes/cyberpunk-bartender.css";
    setThemeColor("#B30E67"); // Deeppink, with Value (HSV) set to 70 (from 100)
    cyberpunkNight=true;
  } else {
    document.getElementById("selected-css").href = "/css/themes/cyberpunk-bartender-night.css";
    setThemeColor("#1D2951"); // A dark navy
    cyberpunkNight=false;
  }

  localStorage.setItem('themeKey', 'cyberpunkBartender');

  cyberpunkBackgroundSwitcher();
}

function selectMayberry() {
  cancelSwitcher();

  document.getElementById("selected-css").href = "/css/themes/mayberry.css";
  document.getElementById("title").innerHTML = "CADENCE";
  document.getElementById("subtitle").innerHTML = "A Rhythmic Ξxperience";

  setThemeColor("#000000"); // Black

  localStorage.setItem('themeKey', 'mayberry');
}

function selectElectromaster() {
  document.getElementById("selected-css").href = "/css/themes/electromaster.css";
  document.getElementById("title").innerHTML = "ケイデンス";
  document.getElementById("subtitle").innerHTML = "A Certain Scientific Radio";

  setThemeColor("#09C1FF"); // A certain scientific light blue

  localStorage.setItem('themeKey', 'electromaster');
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
