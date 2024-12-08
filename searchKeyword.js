function searchSchool() {
    // Get the value of the search input
    var query = document.getElementById('searchInput').value.trim().toLowerCase();

    // Example of school mappings to sections or URLs
    var schoolMapping = {
      "lasu": "explore.html#LASU",       // redirect to a section with id="lasu"
      "unilag": "#unilag",   // redirect to a section with id="unilag"
      "futminna": "#futminna", // redirect to a section with id="futminna"
    };

    // Check if the search query matches any predefined school
    if (schoolMapping[query]) {
      // If a match is found, scroll to the corresponding section
      window.location.href = schoolMapping[query];
    } else {
      // If no match, show an alert
      alert("School not found!");
    }
  }
  