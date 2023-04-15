// On click for button
function onClick() {
    // Go to order link
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd9UaFyvd60zfd81FSM7KoHhLrE5fInKHG-jGCRyHSRgeWmRw/viewform?usp=sf_link';
}

function openTab(evt, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

function openPage(pageName) {
  var i, pagecontent;
  pagecontent = document.getElementsByClassName("pagecontent");
  for (i = 0; i < pagecontent.length; i++) {
    pagecontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultPage").click();
document.getElementById("defaultTab").click();