document.addEventListener("DOMContentLoaded", function() {
    // Get the button that opens the modal in the navigation bar
    var btnNav = document.getElementById("openModal");

    // Get the button that opens the modal in the footer
    var btnFooter = document.getElementById("openModalFooter");

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // When the user clicks the button in the navigation bar, open the modal
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

    // Function to update selected services
    function updateSelectedServices() {
        var selectedServices = [];
        document.querySelectorAll('.selected-service').forEach(function(service) {
            selectedServices.push(service.textContent);
        });
        document.getElementById("selectedServices").textContent = selectedServices.join(', ');
    }

    // Add service to quote
    function addServiceToQuote(service) {
        var li = document.createElement("li");
        li.textContent = service;
        li.classList.add('selected-service');
        document.getElementById("services").appendChild(li);
        updateSelectedServices();
    }

    // Remove service from quote
    function removeServiceFromQuote(service) {
        var selectedServices = document.querySelectorAll('.selected-service');
        selectedServices.forEach(function(selected) {
            if (selected.textContent === service) {
                selected.remove();
            }
        });
        updateSelectedServices();
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
        var body = "Selected Services: " + selectedServices.join(', ') + "\n";
        body += "Name: " + name + "\n";
        body += "Phone Number: " + phone + "\n";
        body += "Address: " + address + "\n";
        body += "Additional Details: " + details;

        // Construct mailto link
        var mailtoLink = "mailto:Spotlesspwash@gmail.com" +
                         "?subject=" + encodeURIComponent(subject) +
                         "&body=" + encodeURIComponent(body);

        // Open default email client with mailto link
        window.location.href = mailtoLink;
    });

    // Hide the navigation bar on scroll down and show it on scroll up
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        

        lastScrollTop = scrollTop;
    });
});
