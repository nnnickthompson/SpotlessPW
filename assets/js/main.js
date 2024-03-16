document.addEventListener("DOMContentLoaded", function() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("openModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  document.getElementById("quoteForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Get form data
      var selectedServices = document.querySelectorAll('input[name^="service"]:checked');
      var servicesText = Array.from(selectedServices).map(function(checkbox) {
          return checkbox.nextElementSibling.textContent.trim();
      }).join(', ');
      
      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var address = document.getElementById("address").value;
      var details = document.getElementById("details").value;
      
      // Compose email body
      var subject = "Quote Request";
      var body = "Selected Services: " + servicesText + "\n"; // Line break for new line
      body += "Name: " + name + "\n";
      body += "Phone Number: " + phone + "\n";
      body += "Address: " + address + "\n";
      body += "Additional Details: " + details;
      
      // Construct mailto link
      var mailtoLink = "mailto:nickrthompson94@gmail.com" +
                       "?subject=" + encodeURIComponent(subject) +
                       "&body=" + encodeURIComponent(body);
      
      // Open default email client with mailto link
      window.location.href = mailtoLink;
  });
});
