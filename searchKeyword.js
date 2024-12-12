// JavaScript function to handle search and redirection
function searchSchool() {
  // Get the value from the search input field
  var searchQuery = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  // Check if the search input is not empty
  if (searchQuery !== "") {
    // Define the URL mapping for each school
    var schoolUrls = {
      unilag: "unilag.html",
      "university of lagos": "unilag.html", // Example of case-insensitivity
      lasu: "lasu.html",
      unn: "unn.html",
      // Add more schools and their corresponding pages here
    };

    // Check if the entered school has a corresponding URL
    if (schoolUrls[searchQuery]) {
      // Redirect to the corresponding school page
      window.location.href = schoolUrls[searchQuery];
    } else {
      // If no match, show an alert
      alert("Sorry, we couldn't find a page for that school.");
    }
  } else {
    // If the input is empty, alert the user
    alert("Please enter a school name.");
  }
}
