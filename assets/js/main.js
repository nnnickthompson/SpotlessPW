document.addEventListener("DOMContentLoaded", function() {
    // Get the button that opens the modal in the navigation bar
    var btnNav = document.getElementById("aboutLink");

    // Get the button that opens the modal in the footer
    var btnFooter = document.getElementById("openModalFooter");

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.querySelector(".modal-content .close");

    // Get the hamburger menu button
    var hamburgerMenu = document.querySelector(".hamburger-icon");

    // Get the dropdown menu
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Function to toggle the dropdown menu
    function toggleMenu() {
        dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    }

    // When the user clicks the "Request a Quote" link in the navigation bar, open the modal
    btnNav.onclick = openModal;

    // When the user clicks the button in the footer, open the modal
    btnFooter.onclick = openModal;

    // When the user clicks on <span> (x) or anywhere outside of the modal, close the modal
    span.onclick = closeModal;
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };

    // Event listener for toggling the dropdown menu
    hamburgerMenu.onclick = toggleMenu;

    // Function to add service to quote and list it under "Selected Services"
    function addServiceToQuote(service) {
        var li = document.createElement("li");
        li.textContent = service;
        li.classList.add('selected-service');
        var selectedServicesList = document.getElementById("selectedServicesList"); // Update this line to match the id of the list
        selectedServicesList.appendChild(li);
    }

    // Event listener for adding service to quote
    document.querySelectorAll('.addService').forEach(function(button) {
        button.addEventListener('click', function() {
            var service = this.dataset.service;
            addServiceToQuote(service);
        });
    });

    // Form submission
    document.getElementById("quoteForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        var selectedServices = [];
        document.querySelectorAll('.selected-service').forEach(function(service) {
            selectedServices.push(service.textContent);
        });
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var details = document.getElementById("details").value;

        // Compose email body
        var subject = "Quote Request";
        var body = "Selected Services: " + selectedServices.join(', ') + "\n\n"; // Add two blank lines
        body += "Name: " + name + "\n"; // Add one blank line
        body += "Phone Number: " + phone + "\n"; // Add one blank line
        body += "Address: " + address + "\n"; // Add one blank line
        body += "Additional Details:\n" + details; // No blank lines after details
        body += "\n"; // Add one blank line at the end

        // Construct mailto link
        var mailtoLink = "mailto:Spotlesspwash@gmail.com" +
                         "?subject=" + encodeURIComponent(subject) +
                         "&body=" + encodeURIComponent(body);

        // Open default email client with mailto link
        window.location.href = mailtoLink;
    });
});
