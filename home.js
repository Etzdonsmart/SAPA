function toggleDropdown() {
  // Toggle 'active' class on the dropdown to show/hide the menu
  var dropdown = document.querySelector(".dropdown");
  dropdown.classList.toggle("active");
}


        // Load accommodations on page load
        window.onload = loadAccommodations;
        // Roommate Finder Logic
        function findRoommate() {
          const gender = document.getElementById("gender").value;
          const interests = document.getElementById("interests").value;
          const results = document.getElementById("roommate-results");

          results.innerHTML = `
      <p>Roommate Found!</p>
      <p>Gender Preference: ${gender}</p>
      <p>Shared Interests: ${interests}</p>
    `;
        }

        // Smooth Scroll to Sections
        function scrollToSection(sectionId) {
          document
            .getElementById(sectionId)
            .scrollIntoView({ behavior: "smooth" });
        }

        // Load Properties on Page Load
        window.onload = loadProperties;